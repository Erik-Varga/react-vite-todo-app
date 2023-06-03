import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const Theme = () => {
    const [theme, setTheme] = useState('')

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'))
            document.documentElement.setAttribute('data-theme',localStorage.getItem('theme'))
        } else {
            checkTheme(null);
        }
    }, [])

    const checkTheme = () => {
        switch(theme) {
            case 'light':
                setTheme('dark')
                localStorage.setItem('theme','dark')
                return document.documentElement.setAttribute('data-theme', 'dark')
                
            case 'dark':
                setTheme('light')
                localStorage.setItem('theme','light')
                return document.documentElement.setAttribute('data-theme', 'light')

            default:
                setTheme('dark')
                localStorage.setItem('theme','dark')
                return document.documentElement.setAttribute('data-theme', 'dark')
        }
    }

    return (
        <div onClick={checkTheme}>
            <div className="toggle">
                {' '}
                <span style={{ marginRight: 4, fontWeight: 'bold' }}></span>
                {theme === 'light' ? (
                    <BsFillMoonFill style={{ cursor: 'pointer' }} />
                    ) : (
                    <BsFillSunFill style={{ cursor: 'pointer' }} />
                )}
            </div>
            
        </div>
    )
}

export default Theme
