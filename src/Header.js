import { Link } from 'react-router-dom';

function HeaderNav()
{
    return(
      <div id="navbar">
        <img src='Images/logo.png' alt='SCP Logo' id='header_logo' />
        <Link to="/Home" className='nav-item'>
          <p id='logo'>SCP Foundation</p> 
        </Link>
          <nav id="navbar-right">
            <ul className="nav text-white">
              <Link to="/Home" className='nav-item'>
                  <li className='navbar a'>Home</li>
              </Link>
              <Link to="/Entries" className='nav-item'>
                  <li className='navbar a'>Entries</li>
              </Link>
              <Link to="/About" className='nav-item'>
                  <li className='navbar a'>About</li>
              </Link>
            </ul>
          </nav>
    </div>
    );
}

export default HeaderNav;