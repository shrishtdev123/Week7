import { useState } from "react"
import { useContext } from "react";
import { Countcontext } from "../components/Countcontext";
 export const ContexApi=()=>{
     const [count, setCount] = useState(0); 
//The Context API is a feature in React that allows you to share values (such as data or functions) between components without having to explicitly pass props through every level of the component tree. This is particularly useful for managing global state or configuration that multiple components need access to, such as user authentication, theme settings, or language preferences.


//Key Concepts of Context API
//Context Creation: You create a context using the createContext function. This function returns a Provider and a Consumer.

//Provider: The Provider component is used to wrap part of your component tree and allows you to specify the value you want to share. All components inside this provider can access the context value.

//Consumer: The Consumer component is used to access the context value. However, in modern React, it's common to use the useContext hook instead of the Consumer component.

//Default Value: You can provide a default value for the context, which is used when there is no matching provider in the tree.
     return <div>
          <Countcontext.Provider value={count}> 
                <Count setCount={setCount} />
            </Countcontext.Provider>
     </div>
}

const Count = ({ setCount }) => {
     return (
         <div>
             <CountRender />
             <Button setCount={setCount} />
         </div>
     );
 }

 const CountRender = () => {
     // Accessing the context value correctly using useContext
     const count = useContext(Countcontext); 
     return (
         <div>
             {count} {/* Display the current count */}
         </div>
     );
 }

 const Button = ({ setCount }) => {
     const count = useContext(Countcontext); // Access the current count from context
     return (
         <div>
             <button onClick={() => {
                 setCount(count + 1); // Increment the count
             }}>
                 Increment
             </button>
             <button onClick={() => {
                 setCount(count - 1); // Decrement the count
             }}>
                 Decrement
             </button>
         </div>
     );
 }