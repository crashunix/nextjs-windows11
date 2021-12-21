import Taskbar from '../components/taskbar';
import Menu from '../components/menu';

const Desktop = () => {
    return (
        <div className="w-screen h-screen bg-windows-wallpaper bg-center bg-cover relative">
            <Menu></Menu>
            <Taskbar></Taskbar>
        </div>
    );
}

export default Desktop;