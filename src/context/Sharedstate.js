import { useEffect, useState } from 'react';
import { createContext } from "react";

const Context = createContext();

const SharedState = (props) => {

    const [temp, setTemp] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTemp({...temp, [name]: value });
      };

    return (
        <Context.Provider value={{
            temp, setTemp ,handleChange
        }}>
            {props.children}

        </Context.Provider>
    );
};

export { Context, SharedState };