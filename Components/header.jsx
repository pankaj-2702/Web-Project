import './header.css'
function Header(){
    return(
      <header>
        <div className="logo">
            <img src="/images/logo-dark.jpg" alt="logo" />
        </div>
        <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#menu">Menu</a></li>
             <li><a href="#gallery">Gallery</a></li>
             <li><a href="#reservation">Reservation</a></li>
             <li><a href="#contact">Contact Us</a></li>
        </ul>
      </header>
    )
}

export default Header