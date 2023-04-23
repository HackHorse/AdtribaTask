import React from "react";
import { Bars } from "react-loading";

const SpinLoader = () => {
  return (
    <div>
    {/* Display the loader */}
    <Bars color="#00BFFF" />
    {/* Your other components */}
  </div>
  );
};

export default SpinLoader;