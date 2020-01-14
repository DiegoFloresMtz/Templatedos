import React, {Component} from 'react';
import {Icon} from 'antd';
import '../style/sect3.css';

export default class Sect3 extends Component{
  constructor(props){
    super(props);
    this.wrapperRef = React.createRef();
  }
  handleClick(){
    const wrapper =this.wrapperRef.current;
    wrapper.classList.toggle('is-nave-open')
  }
  render(){
    return(
      <div ref={this.wrapperRef} className="wrapper">
        <div className="nave">
          <Icon
            className="nave-icon"
            type="menu-fold"
            onClick={()=> this.handleClick()}/>

            <div className = "nave-body">
            ASDFGÑLKJHG
            </div>
        </div>
      </div>
    );
  }
}
