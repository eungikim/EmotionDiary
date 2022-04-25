import React, { useState, useEffect } from "react";

const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: TextView: ${text}`);
  });
  return <div>{text}</div>;
});

const CountView = ({ count }) => {
  useEffect(() => {
    console.log(`Update :: CountView: ${count}`);
  });
  return <div>{count}</div>;
};

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(`Update :: OptimizeTest`);
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count Layout</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>Text Layout</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
