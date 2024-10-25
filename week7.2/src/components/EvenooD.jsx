import { useRecoilValue } from "recoil";
import { evenSelector } from "../store/atom/countAtom";

  export const EvenooD=()=>{
     
    const isEven = useRecoilValue(evenSelector);
     let ans=""
       if(isEven)
       {
            ans="it is even";
       }
   
       return <div>
             {ans}
       </div>
}
