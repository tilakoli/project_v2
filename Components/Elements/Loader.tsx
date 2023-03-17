import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = ({ loading }) => {
  return (
    <div className="fixed z-50 flex items-center justify-center w-screen h-screen bg-black">
      <RingLoader
        color="#f8f991"
        loading={loading}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
