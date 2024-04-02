import { useEffect, useState } from 'react';
import { RiSunLine, RiMoonLine } from "@remixicon/react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'retro');

    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);


    const changeTheme = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.target.checked ? setTheme('synthwave') : setTheme('retro');
    };


    return (
        <label className="swap swap-rotate">

            <input
                type="checkbox"
                className="theme-controller"
                onChange={changeTheme}
                checked={theme === 'synthwave'}
            />

            <RiSunLine
                className="swap-off fill-current w-10 h-10"
            />
            <RiMoonLine
                className="swap-on fill-current w-10 h-10"
            />

        </label>
    );
};

export default ThemeToggle;