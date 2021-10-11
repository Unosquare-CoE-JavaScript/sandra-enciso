import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
    console.log('DemoOutput RUNNING')
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
};

export default React.memo(DemoOutput); 
/* React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook
in its implementation, it will still rerender when state or context change.  */