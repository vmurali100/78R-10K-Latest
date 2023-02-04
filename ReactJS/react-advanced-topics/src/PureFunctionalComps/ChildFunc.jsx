import React, { memo } from "react";

const ChildFunc = ({count}) => {
  console.log("ChildFunc Renders");
  return <div>
    <h2>Child = {count}</h2>
  </div>;
};
console.log("Memo is : ",memo)
export default memo(ChildFunc);
