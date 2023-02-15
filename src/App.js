import React, { useState } from 'react'
export default function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>App Updated 3</h3>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>

        </div>
    )
}
