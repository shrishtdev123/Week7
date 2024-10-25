import axios from "axios";
import { atom,selector } from "recoil";

// Atom for notifications with an asynchronous default value
export const notificationAtom= atom({
    key: "notificationAtom",
    default:selector({
        key:"networkSelector",
        get:async()=>{
            const response = await axios.get("http://localhost:4000/getNotification");
            return response.data.data[0];
        }
    })  
})
 
export const totalSum = selector({
     key:"totalSum",
     get:({get})=>{
         const allNotification=get(notificationAtom);
         return allNotification.Job+allNotification.Network+allNotification.Message+allNotification.Notification;
     }
})
// useRecoilValue(): if we want to get only value than we should use useRecoilValue()
// const value=useRecoilValue()
// useRecoilState():if we want to get both varibal and seter Function than we should go for useRecoilState() 
// const [value,setValue]=useRecoilState();