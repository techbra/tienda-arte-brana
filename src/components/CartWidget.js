import Button from "react-bootstrap/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
function CartWidget (){
    return(
    <div className="CartWidget">
    <FontAwesomeIcon icon={faCartShopping}/>
       <h2>7</h2>
    </div>
   
    );
}
export default CartWidget;