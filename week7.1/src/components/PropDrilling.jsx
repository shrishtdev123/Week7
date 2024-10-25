
import { Button } from "./Button";
import { Counter } from "./Counter";

//Prop drilling is a term used in React to describe the process of passing data (or "props") from a parent component down to child components through multiple layers of the component tree, even if some of the intermediary components do not need the data themselves. This can lead to a situation where props are passed down through many levels just to reach the component that actually needs them, which can make your code harder to manage and understand.

//Problems with Prop Drilling
//Complexity: As your application grows, you might find yourself passing props through many layers of components, making it harder to track where data is coming from and where it’s going.

//Unnecessary Re-renders: If a prop changes, it can cause all the intermediary components to re-render, even if they don’t use that prop. This can affect performance in larger applications.

//Maintainability: It becomes challenging to maintain and refactor your code because you have to keep in mind the props being passed down through several layers

//Solutions to Prop Drilling
//To manage state and avoid prop drilling, you can use various approaches:

//1.Context API: React's Context API allows you to create a context that can be accessed by any component in the tree, regardless of how deep it is. This way, you don’t need to pass props through every level.

//2.State Management Libraries: Libraries like Redux, MobX, or Zustand provide more robust solutions for managing state globally, which can help eliminate the need for prop drilling.

//3.Composition: Sometimes, rethinking your component structure to better encapsulate functionality can help avoid prop drilling. By designing components that encapsulate their own state and behavior, you can reduce the need for props to be passed down through multiple layers.

export const PropDrilling=({count,setCount})=>{
      return <div>
          
            <Button count={count} setCount={setCount}/>
            <Counter count={count}/>
      </div>
}