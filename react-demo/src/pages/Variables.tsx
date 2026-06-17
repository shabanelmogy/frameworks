import React, { useState } from 'react';

// Child component to demonstrate props
interface VariablesDemoProps {
  optionalProp?: string;
  requiredProp: string;
}

const VariablesDemo: React.FC<VariablesDemoProps> = ({
  optionalProp = "Default Optional Prop Value",
  requiredProp
}) => {
  // 1. Normal Variables
  const title = "React";
  const description = "A component-based library for building user interfaces.";

  // 2. State Variable (useState)
  const [stateExample] = useState("This is a state variable");

  return (
    <div className="lesson-container">
      <h2>Variables and Props in React</h2>
      <p className="lesson-intro">React provides several ways to declare local variables, manage component state, and receive data via props. Here is how they compare:</p>

      <div className="example-card">
        <h3>1. Normal Variables</h3>
        <p className="explanation">
          Standard local variables declared within the component function. They do not persist across renders and changing them does not trigger a re-render. You display them using JSX curly braces: <code>{`{ variableName }`}</code>.
        </p>
        <div className="demo-box">
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Description:</strong> {description}</p>
        </div>
      </div>

      <div className="example-card">
        <h3>2. State Variables (useState)</h3>
        <p className="explanation">
          State variables are declared using the <code>useState</code> hook. Modifying a state variable (via its setter function) triggers a component re-render to update the UI. You display them directly: <code>{`{ stateName }`}</code>.
        </p>
        <div className="demo-box">
          <p><strong>Value:</strong> {stateExample}</p>
        </div>
      </div>

      <div className="example-card">
        <h3>3. Optional Props</h3>
        <p className="explanation">
          Props passed optionally from parent components. You can destructure them in the arguments list and provide a default fallback value if the parent does not provide one.
        </p>
        <div className="demo-box">
          <p><strong>Value provided by Parent:</strong> {optionalProp}</p>
        </div>
      </div>

      <div className="example-card">
        <h3>4. Required Props</h3>
        <p className="explanation">
          Props enforced by TypeScript type definitions. The compiler ensures that parent components must pass a value for this prop, preventing compile-time bugs.
        </p>
        <div className="demo-box">
          <p><strong>Required Value from Parent:</strong> {requiredProp}</p>
        </div>
      </div>
    </div>
  );
};

export const Variables: React.FC = () => {
  return (
    <VariablesDemo requiredProp="Required Value from Parent" />
  );
};

export default Variables;
