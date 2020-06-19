import React from "react";
import Loader from "react-loader-spinner";

const Loading = ({ width }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-6">
        <Loader type="Audio" color="#00c3b1" height={width} width={width} />
      </div>
      <h2 className="text-primary col-12 text-center h-25 my-5">
        Loading . . .
      </h2>
    </React.Fragment>
  );
};

export default Loading;
