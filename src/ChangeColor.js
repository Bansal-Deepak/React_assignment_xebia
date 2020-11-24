import React,{useState} from 'react';
import MouseOverComponent from  './withMouseProperties';
let ChangeColor=(props)=>{
// console.log('props >',props);
let [colour,setColour]=useState('blue');
let changeCol=()=>{
    setColour('red');
}
let colorStyle={
    color:colour
}

let {mouseOver,mouseOut}=props;
return(<div onClick={changeCol} onMouseLeave={mouseOut}  onMouseEnter={mouseOver} style={colorStyle}>
    <h1>Test Component</h1>
    <h2>Testing More</h2>
    <h3>Testing Some More</h3>
    </div>)
}
export default MouseOverComponent(ChangeColor);