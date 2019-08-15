import React from 'react';
import './App.css';
import {DatePicker} from './components/DatePicker'

function App() {
  return (
    <div className="outer-div">
      <DatePicker
        onChange={(value)=>console.log(value)}
        label="Choose a date"
        tooltip="Sample tooltip"
        helperText="Sample helper text" />
    </div>
  );
}

export default App;
