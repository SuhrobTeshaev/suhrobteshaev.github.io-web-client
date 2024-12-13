import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[600px] mx-auto  ">{children}</div>
  );
};

export default Container;
