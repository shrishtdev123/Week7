
import {atom,selectorFamily} from "recoil"
import axios from "axios"
export const todosAtomFamily=atom({
      key:"todosAtomFamily",
      default:selectorFamily({
          key:"selectorFamily",
          get:(id)=>async({get})=>{
            const response = await axios.get("http://localhost:4000/getNotification");
            return response.data.data[0];
          }
      })
})
     
