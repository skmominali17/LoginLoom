import { createContext, useContext, useState } from "react";

const UserLogged = createContext({
    name: "",
    addName: () => {}
})

export const useLogged = () => {
    return useContext(UserLogged)
}

export const UserLoggedProvider = ({children}) => {
    const [name, setName] = useState("");

    const addName = (newName) => {
        setName(newName);
    }

    return (
        <UserLogged.Provider value={{ name, addName }}>
            {children}
        </UserLogged.Provider>
    )
}
