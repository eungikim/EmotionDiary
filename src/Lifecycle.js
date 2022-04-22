import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      // Unmount 시점에 실행이 됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount testing component</div>;
};

const Lifecycle = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!isVisible);
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  /*
  useEffect(() => {
    console.log("Mount");
  }, []);
  useEffect(() => {
    console.log("Update");
  });
  useEffect(() => {
    console.log(`count is update: ${count}`);
  }, [count]);
  useEffect(() => {
    console.log(`text is update: ${text}`);
  }, [text]);
*/

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggleVisible}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
