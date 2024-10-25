import axios from "axios";
import { atom,selector } from "recoil";

// Atom for notifications with an asynchronous default value
export const notificationAtom = atom({
    key: "notificationAtom",
    default: (async () => {
        
            const response = await axios.get("http://localhost:4000/getNotification");
            return response.data.data[0];
        
})

// Selector to calculate the total sum of Jobs from notifications
export const totalSum = selector({
    key: "totalSum",
    get: ({ get }) => {
        const notifications = get(notificationAtom);
         
        return 10;
    }
})