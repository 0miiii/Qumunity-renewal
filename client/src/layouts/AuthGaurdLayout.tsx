import React from 'react';

interface Iprops {
  children: React.ReactNode;
}

const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  return <>{children}</>;
};

export default AuthGaurdLayout;
