import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{user, setUser}} children={children} />;
}
export function useUserContext() {
  const userContext = useContext(UserContext);

  return userContext;
}

export default useUserContext;
