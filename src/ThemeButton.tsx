import { useTheme } from './Theme.tsx';
import './ThemeButton.css';



const ThemeButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();
  
    return (
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <h1>My App</h1>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    );
  };
  
  export default ThemeButton;
  