import { useState } from "react";
const Clicker = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Please click here!</h2>
      <button onClick={() => setCount(count + 1)}>
        Click!
      </button>
      <h3>The button was clicked {count} times</h3>
    </div>
  );
}
 
export default Clicker;