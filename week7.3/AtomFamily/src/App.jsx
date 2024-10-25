import {RecoilRoot} from "recoil"

import { ToDo } from "./components/ToDo"
//atomFamily is a feature from the Recoil state management library for React that allows you to create a family of atoms with similar behavior but different values. Atoms in Recoil represent units of state; they can be read from and written to from any component in your React application.

//Key Concepts of atomFamily
//Dynamic State: atomFamily lets you create multiple atoms dynamically, based on a parameter. This is particularly useful when you need to manage state for a list of items or any structure where the state varies based on an identifier.

//Parameterization: When creating an atomFamily, you define a function that takes a parameter (like an ID) and returns an atom. Each call to this function with a unique parameter creates a separate atom instance.

//Isolation of State: Each atom created by atomFamily is independent, meaning that updating one atom does not affect the others. This allows for granular control over state that is related but separate.

function App() {
  
  return (
    <div>
          <RecoilRoot>
          <ToDo id={1}/>
          <ToDo id={2}/>
          <ToDo id={3}/>
          <ToDo id={4}/>
          </RecoilRoot>
          
    </div>
  )
}

export default App
