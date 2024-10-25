import { atomFamily } from "recoil";
import { data } from "../todos";


export const todosAtomFamily=atomFamily({
     key:"todosAtomFamily",
     default:id=>{
           let foundtodo=null;
           for(let i=0;i<data.length;i++)
           {
               if(data[i].id===id)
                foundtodo=data[i];
           }

           return foundtodo;
        //  return  data.find(x=>x.id===id);
     }
})