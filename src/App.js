import React from "react";
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button size="medium">BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray" size="medium">BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink" size="medium">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline/* ={ true } 생략 가능*/ >BUTTON</Button>
        <Button color="gray" size="medium" outline={ true }>BUTTON</Button>
        <Button color="pink" size="small" outline={ true }>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>BUTTON</Button>
        <Button color="gray" size="large" fullWidth>BUTTON</Button>
        <Button color="pink" size="large" fullWidth>BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
