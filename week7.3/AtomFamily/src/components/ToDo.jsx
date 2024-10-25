import { useRecoilValue } from "recoil";
import { todosAtomFamily } from "../atom/help";

// eslint-disable-next-line react/prop-types
export const ToDo=({id})=>{
    const value=useRecoilValue(todosAtomFamily(id));
     return <div>
         <h1>{value.name}</h1>
     </div>
}