
import { Component } from 'react';
import {  useSelector } from 'react-redux';



class Test extends Component {

  render() {
    const selectValue = state => state.value;
    const value = useSelector(selectValue);

    return (
      <div>{ value }</div>
    );
  }
}

export default Test;
