import React ,{useState} from 'react';
import { createContext } from 'react';

const mainContent = createContext();

export default function DataProvider({children}){
    const [login,setLogin] = useState(false);

    const [loginUser,setLoginUser] = useState({
        fullName:"",
        email:"",
        pwd:""
    });

    return(
        <div>
        <mainContent.Provider value={{login,setLogin,loginUser,setLoginUser}}>
            {children}
        </mainContent.Provider>
        </div>
    );
}

export {mainContent};