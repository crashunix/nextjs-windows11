import React from 'react';
import { MenuContext } from "../stores/menu";

const Taskbar = () => {

    const { open, setOpen } = React.useContext(MenuContext);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center bg-white backdrop-filter backdrop-blur-3xl bg-opacity-75">
            <div className="flex items-center space-x-2">
                <div className={`taskbar-item ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                        <div className="bg-windows-blue-100 mr-px mb-px rounded-tl-sm"></div>
                        <div className="bg-windows-blue-200 mb-px rounded-tr-sm"></div>
                        <div className="bg-windows-blue-200 mr-px rounded-bl-sm"></div>
                        <div className="bg-windows-blue-300 rounded-br-sm"></div>
                    </div>
                </div>
                <div className="taskbar-item">
                    <div className="bg-edge-logo bg-center bg-cover w-full h-full"></div>
                </div>
                <div className="taskbar-item">
                    <div className="bg-store-logo bg-center bg-cover w-full h-full"></div>
                </div>
            </div>
            <div className="flex items-center absolute right-3 pr-6 space-x-4">
                <span className="text-sm">POR</span>
                <span className="text-sm">16:32</span>
            </div>
            {/* <div className="h-full w-2 border-l border-gray-700 absolute right-0 hover:bg-white hover:bg-opacity-5"></div> */}
        </div>
    );
}

export default Taskbar;