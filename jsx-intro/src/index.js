import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX - JavaScript Extended
// no quotes - variables get wrapped with {}
const name = 'foo'
const element = <h1>Hello {name.toUpperCase() + '!!!'} 🙂</h1>

// we can return JSX from functions
const greet = () => <h1>Hello</h1>

// if we have multiple lines we wrap them in parentheses
// to wrap everything you can use a React Fragment -> <>
const jsxStructure = (
  <>
    <div>first div</div>
    <div>
      <div>
        hello
      </div>
    </div>
  </>
)

const style = { backgroundColor: 'green' }

const elementWithCSS = (
  <div>
    <p style={{ backgroundColor: 'pink' }}>
      first tag
    </p>
    <p style={style}>
      second tag
    </p>
  </div>
)

// name conflicts: class -> className / for -> htmlFor

ReactDOM.render(
  elementWithCSS,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
