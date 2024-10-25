export const Button=({count,setCount})=>{
     return <div>
        <button onClick={()=>{
             setCount(count+1);
        }}>Increment</button>
        <button onClick={()=>{
              setCount(count-1);
        }}>Decrement</button>
     </div>
}