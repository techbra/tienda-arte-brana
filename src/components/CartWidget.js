import Button from "react-bootstrap/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
function CartWidget (){
    return(
    <div className="cartwidget">
    <FontAwesomeIcon icon={faCartShopping}/>
    </div>
   
    );
}
export default CartWidget;