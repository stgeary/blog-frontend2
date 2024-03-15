import { useState } from 'react'
// import axios from "axios";
export function Content() {
    const [count, setCount] = useState(0)
    // let posts = [];
    return(
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    )}