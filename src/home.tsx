import { useState } from 'react';
import _UserForm from './form';
import _LoginRegister from "./login.tsx";
import GlowingCursor from './GlowingCursor.tsx';
import './home.css';

type PageComponents = {
  [key: string]: JSX.Element;
};

// Define the page components
const pageComponents: PageComponents = {
  Home: <Home />,
  Form: <_UserForm />,
  Login: <_LoginRegister />,
};

function Home() {
  return (
    <div className='home'>
     <h1>Welcome to the Home Page</h1>
    </div>
  );
}


function App() {
  const [currentPage, setCurrentPage] = useState('Home'); 

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className="body">
      <nav className='nav-bar'>
        <ul className='nav-list'>
          {Object.keys(pageComponents).map(page => (
            <li key={page}>
              <button className="nav-link" onClick={() => handlePageChange(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>
      {pageComponents[currentPage]}
    </div>
    <GlowingCursor />
    </>
  );
}

export default App;
