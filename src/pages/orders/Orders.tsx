import React from "react";
import {Link} from "react-router-dom"
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import "./Orders.css"

const Orders: React.FC = () => {
    return (
        <Jumbotron className="bg-white w-50 ml-auto mr-auto shadow-sm orders__jumbotron">
            <div className="text-center">
            <h3 className="text-success">Yay! Your order is completed</h3>
            <Link to="/">Click here to go back to home</Link>
            </div>
        </Jumbotron>
    )
}

export default Orders;