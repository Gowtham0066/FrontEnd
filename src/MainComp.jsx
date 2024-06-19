import WelcomePage from './WelcomePage';
import SignInPage from './component/Pages/SignInPage';
import SignUpPage from './component/Pages/SignUpPage';
import Movies from "./component/Tabs/Movies";
import Discuss from "./component/Tabs/Discuss";
import TopRated from "./component/Tabs/TopRated";
import Upcoming from "./component/Tabs/Upcoming"


import { useState } from 'react';
function MainComp() {
const [tab,setTab]=useState("welcome");

    switch (tab) {
        case "sign-in":
           
            return <SignInPage  setTab={setTab}/>;
        case "sign-up":
            return <SignUpPage setTab={setTab} />;
            case "movies":
            
                return <Movies></Movies>;
                case "top":
                 
                 return <TopRated></TopRated>;
                 case "discuss":
                 
                     return <Discuss></Discuss>;
                     case "upcoming":
                 
                         return <Upcoming></Upcoming>;
        default:
            return <WelcomePage setTab={setTab} />;
    }
   
       
    
     
}
export default MainComp;