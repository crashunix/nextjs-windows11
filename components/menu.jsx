import { BsPower } from "react-icons/bs";
import React, { useState } from 'react';
import { MenuContext } from "../providers/menu";

const Menu = () => {

    const { open, setOpen } = React.useContext(MenuContext);

    const [favoriteSoftwares, setFavoriteSoftwares] = useState([]);
    const [softwares, setSoftwares] = useState([
        {
            id: 1,
            icon: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1200px-Microsoft_Edge_logo_%282019%29.svg.png',
            label: 'Edge'
        },
        {
            id: 2,
            icon: 'https://winaero.com/blog/wp-content/uploads/2020/02/Updated-Mail-icon-2020.png',
            label: 'Mail'
        },
        {
            id: 3,
            icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Microsoft_Store_app_icon.png/768px-Microsoft_Store_app_icon.png',
            label: 'Store'
        },
        {
            id: 4,
            icon: 'https://www.apkmirror.com/wp-content/uploads/2018/06/5b3553d66e5a7.png',
            label: 'Netflix'
        },
        {
            id: 5,
            icon: 'https://pbs.twimg.com/media/Ec_jU74XsAQbciQ.png',
            label: 'Settings'
        },
        {
            id: 6,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/480px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png',
            label: 'Office'
        },
        {
            id: 7,
            icon: 'https://www.masterambiental.com.br/wp-content/uploads/2020/07/image-gallery-spotify-logo.png',
            label: 'Spotify'
        },
        {
            id: 8,
            icon: 'https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png',
            label: 'To Do'
        },
        {
            id: 9,
            icon: 'https://winaero.com/blog/wp-content/uploads/2019/10/Windows-10-Calculator-Fluent-Icon-Big-256.png',
            label: 'Calculator'
        },
        {
            id: 10,
            icon: 'https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png',
            label: 'Explorer'
        },
        {
            id: 11,
            icon: 'https://gooova.com/wp-content/uploads/2021/04/ps-21-600x600.png',
            label: 'Photoshop'
        },
        {
            id: 12,
            icon: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172674iF0FE324A29E563E9/image-size/large?v=v2&px=999',
            label: 'Games'
        },
    ]);

    return (
        <div className={`w-screen h-screen max-w-screen max-h-screen overflow-hidden flex items-end justify-center pb-14`}>
            <div className={`transform ${open ? 'translate-y-0' : 'translate-y-menu'} transition-transform ease-in-out duration-300 backdrop-filter backdrop-blur flex flex-col justify-center rounded-lg overflow-hidden`}>
                <div className="w-full bg-windows-gray py-10">
                    <div className="flex items-center px-16">
                        <span className="text-white font-medium">Pinned</span>
                    </div>
                    <div className="grid grid-cols-6 px-16 py-8 gap-10">
                        {softwares.map(software => (
                            <button className="sw-icon" key={software.id}>
                                <div className="sw-icon__image" style={{backgroundImage: `url(${software.icon})`}}></div>
                                <div className="sw-icon__label">{software.label}</div>
                            </button>
                        ))}
                    </div>
                    {/* <div className="flex items-center px-16">
                        <span className="text-white font-medium">Recommended</span>
                    </div> */}
                </div>
                <div className="flex items-center justify-between px-16 py-4 bg-windows-hard-gray">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-satoru bg-center bg-cover"></div>
                        <span className="text-sm text-white">Juan Macário</span>
                    </div>
                    <button>
                        <BsPower className="text-white text-2xl" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Menu;