import * as React from 'react';
import Routing from '../routing';
import AuthProvider from './authProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}
