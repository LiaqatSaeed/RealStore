import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';

// First we need to add a type to let us extend the incoming component.
type BaseProps = {
  create?: Function;
  update?: Function;
  get?: Function;
  getAll?: Function;
  remove?: Function;
  snapshot?: Function;
};

type CollectionProps = {
  name: string;
  id?: string;
  observer?: Object
};

export function FireStore<P>(WrappedComponent: React.FC<P & BaseProps>) {
  const FireStoreBase = (props: P) => {
    const create = async ({name, id}: CollectionProps) => {};

    const update = async ({name, id}: CollectionProps) => {};

    const snapshot = async ({name, observer}: CollectionProps) => {
        return await firestore().collection(name).onSnapshot(observer)
    };

    const get = async ({name, id}: CollectionProps) => {
      return await firestore().collection(name).doc(id).get();
    };

    const getAll = async ({name}: CollectionProps) => {
      return await firestore().collection(name).get();
    };

    const remove = async ({name}: CollectionProps) => {
      return await firestore().collection(name).get();
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
