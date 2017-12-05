import React, {Component} from "react";
import Card from "./card";

const Box = ({recipes}) => {
    console.log({recipes});
    return <div className = "box">
      <Card recipe = {recipes[0]}/>
    </div>;
}
export default Box;
