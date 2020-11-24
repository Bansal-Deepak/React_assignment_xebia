
import React,{Component} from 'react';
let MouseOverComponent=(OriginalComp)=>{
    class NewComponent extends  Component{
        mouseOver=()=>{
            console.log('mouse is over the component');
          
        }
        mouseOut=()=>{
            console.log('mouse is out of component');
            
        }
        render(){
            return(<OriginalComp mouseOver={this.mouseOver} mouseOut={this.mouseOut} />)
        }
    }
    return NewComponent;
}
export default MouseOverComponent;