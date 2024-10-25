import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil"
import  {useState,useEffect} from "react"
import { notificationAtom, totalSum } from "./store/atom/notification";
function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

const MainApp = () => {
       
          const [notify,setNotify]=useRecoilState(notificationAtom);
          const sum=useRecoilValue(totalSum);

          
    return (
        <div>
            <button>Home</button>
            <button>Jobs ({notify.Job})</button>
            <button>My Network ({notify.Network})</button>
            <button>Messaging ({notify.Message})</button>
            <button>Notification ({notify.Notification})</button>
            <button>Me ({sum})</button>
        </div>
    );
};

export default App;
