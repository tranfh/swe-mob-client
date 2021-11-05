import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import './Python.css';

const Python = (props) => {
  return (
    <div className="flex justify-center">
      <div className="outline w-75 pa3 mr7">
        <h1>Python🐍</h1>
        <h2 id="numbers" className="ml6" style={{ textAlign: 'left' }}>
          Numbers
        </h2>
        <p>
          Python's 2 main types for Numbers is int and float (or integers and
          floating point numbers)
        </p>
        <div className="w-75 pa3 ml3 center">
          <CodeBlock
            text={`type(1)   # int
type(-10) # int
type(0)   # int
type(0.0) # float
type(2.2) # float
type(4E2) # float - 4*10 to the power of 2`}
            language={'python'}
            showLineNumbers={props.showLineNumbers}
            theme={dracula}
          />
        </div>
      </div>
    </div>
  );
};

export default Python;
