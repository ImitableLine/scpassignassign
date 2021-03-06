import { Link } from 'react-router-dom';

function Footer()
{
    return(
    
        <footer className='footer-parent'>
            <div className="footer-content">
                <h1>SCP Foundation</h1>
                <p>We will find you, and we will contain you. &trade;</p>
                <nav id="pagelinks">
                    <ul className="container-a">
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
                <p>Copyright &copy;1881 SCP Foundation designed by <span>Ricky And David</span></p>
            </div>
            

        </footer>
    
    );
}
export default Footer;