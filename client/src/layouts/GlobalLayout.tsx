import React from "react";
import Header from "../components/Header/Header";

interface IProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GlobalLayout;
