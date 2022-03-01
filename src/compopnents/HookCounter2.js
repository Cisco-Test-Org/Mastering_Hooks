import { useState } from "react"

function HookCounter2(){

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    function setIncrementBy5(){
        for(let i= 0; i < 5; i++){
            setCount(previousState => previousState + 1)
        }        
    }

    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={setIncrementBy5}>Increment by 5</button>
        </div>
    )
}

export default HookCounter2