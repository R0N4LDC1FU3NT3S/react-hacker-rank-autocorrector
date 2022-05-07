import React, { useState } from "react";

// const corrections = {
//   realy: "really",
//   wierd: "weird",
//   xy: "x"
// };

// const corrections = {
//     xy: "x",
//     y: "z",
//     abc: "bc"
// };

const AutocorrectTextarea = ({corrections}) => {
  const [state, setState] = useState("");

  const handleTextArea = (e) => {
    let strTmp;
    let arr = e.target.value.split(" ");
    Object.keys(corrections).forEach((element) => {
      let i = arr.filter((item) => item === element)[0];
      let j = arr.filter((item) => item === "").length;
      if (i === element && j === 1) {
        strTmp = e.target.value.replace(i, corrections[i]);
      }
    });
    if (strTmp) {
      setState(strTmp);
    } else {
      setState(e.target.value);
    }
  };

  return (
    <div className="text-center">
      <textarea
        data-testid="textarea"
        onChange={handleTextArea}
        value={state}
        rows={10}
        cols={80}
        className="card"
      />
    </div>
  );
};

export default AutocorrectTextarea;
