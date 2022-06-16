import { Link } from 'react-router-dom';


function Sidebar() {
    
        function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";

            
            }
         function closeNav() {
             document.getElementById("mySidebar").style.width = "0";
             document.getElementById("main").style.marginLeft = "0";
            }

        
        


    return(
        <div>
            <div id="mySidebar" class="sidebar" >
            <img src='Images/logo.png' alt='SCP Logo' id='header_logo_sidebar' />
                <a href='#Sidebar' className="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/Home" className='nav-item'>
                <li href='#Home' class="w3-bar-item w3-button">Home</li>
                </Link>
                <Link to="/Entries" className='nav-item'>
                <li href='#Entries' class="w3-bar-item w3-button">Entries</li>
                </Link>
                <Link to="/About" className='nav-item'>
                <li href='#Home' class="w3-bar-item w3-button">About</li>
                </Link>
               
                
                
            </div>
            <div id="main">
                <button class='openbtn' onClick={openNav}>&#9776;</button>
                
            </div>
            
        </div>
        

    );
}

export default Sidebar;