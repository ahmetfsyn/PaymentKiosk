import type React from "react";

const BaseLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="bg-[url('/background.svg')] h-screen bg-center  ">
      {children}
    </div>
  );
};

export default BaseLayout;
