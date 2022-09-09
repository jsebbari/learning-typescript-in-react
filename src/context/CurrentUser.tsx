import { createContext, useState } from 'react';



export const UserContext = createContext<any>(null);


export function UserContextProvider({children}:any) {


  const [msgContext, setMsgList] =useState("Message depuis context")

  return (
    <UserContext.Provider value={{msgContext, setMsgList}}>
        {children}
    </UserContext.Provider>
  )
}





