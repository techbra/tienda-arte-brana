import "./NavBar.css";
import Button from "react-bootstrap/Button"

function NavBar(){
    return(
        <div clasName="navbar">
         <p style={{color:"purple"}}>Tienda de Arte♥</p>
        <h1 style={{color:"pink"}}>ARTEOLOGIA</h1>
        <a href="/">Menu</a>
        <a href="/create">Tienda</a>
        <a href="/create">Obras</a>
        <Button variant="primary">Primary</Button>
       </div>
      
        
    );
}
export default NavBar;