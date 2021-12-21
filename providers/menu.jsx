import React, { useState } from "react";

export const MenuContext = React.createContext({});

export const MenuProvider = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            {props.children}
        </MenuContext.Provider>
    );
}