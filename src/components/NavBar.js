import "./NavBar.css";
import Button from "react-bootstrap/Button"
import CartWidget from "./CartWidget";
import { fontSize } from "@mui/system";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div>
        <a href="/create" claName="nav enlace">Inicio</a>
        <a href="/create" claName="nav enlace">Tienda</a>
        <a href="/create" claName="nav enlace">Obras</a>
        <CartWidget></CartWidget>
        <p style={{color:"purple", 
        background: "light blue",
        borderRdius: "8px", fontSize:"large"}}>Tienda de Arte♥</p>
        <h1 style={{color:"fuchsia", fontSize:"x-large"}}>ARTEOLOGIA</h1>
       </div>
    </nav>
  );
}
 
export default Navbar;