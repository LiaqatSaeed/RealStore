import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import map from "lodash/map"

// First we need to add a type to let us extend the incoming component.
interface BaseProps {
  create?: Function;
  update?: Function;
  get?: Function;
  getAll?: Function;
  remove?: Function;
  snapshot?: Function;
};

interface CollectionProps {
  name: string;
  id?: string;
  observer?: Object
  document?: Object
};

export default function FireStore<P>(WrappedComponent: React.FC<P & BaseProps>) {
  const FireStoreBase = (props: P) => {
    const create = async ({ document, id }: CollectionProps) => {
      let response = await firestore().collection('Users').add(document);
      return response;
    }

    const update = async ({ document, name, id }: CollectionProps) => {
      let response = await firestore().collection(name).doc(id).update(document);
      return response
    };

    const snapshot = async ({ name, observer }: CollectionProps) => {
      let response = await firestore().collection(name).onSnapshot(observer)
      return response;
    };

    const get = async ({ name, id }: CollectionProps) => {
      let response = await firestore().collection(name).doc(id).get();
      return response;
    };

    const getAll = async ({ name }: CollectionProps) => {
      let {docs} = await firestore().collection(name).get();
      return map(docs,(doc)=> doc.data());
    };

    const remove = async ({ name, id }: CollectionProps) => {
      let response = await firestore().collection(name).doc(id).delete()
      return response;
    };

    return (
      <WrappedComponent
        {...props}
        create={create}
        update={update}
        get={get}
        getAll={getAll}
        remove={remove}
        snapshot={snapshot}
      />
    );
  };
  return FireStoreBase;
}
