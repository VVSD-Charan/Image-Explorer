import { useGlobalContext } from "./context";
import { BsFillSunFill,BsFillMoonFill } from 'react-icons/bs';

export const ThemeToggle = () =>
{
    const {isDarkTheme,toggleDarkTheme}=useGlobalContext();

    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {
                    isDarkTheme? (
                        <BsFillMoonFill className="toggle-icon" style={{border: "2px solid white"}}/>
                    ) : ( 
                        <BsFillSunFill className="toggle-icon" style={{border: "2px solid black"}}/>
                    )
                }
            </button>
        </section>
    );
}