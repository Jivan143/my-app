import React, { Component} from "react";
import {Link} from "react-router-dom"
class Welcome extends Component {
    render (){
        return (
            <div className=" container">
            <h2>welcome Choose your Course </h2>

            <Link to="/course/React">React</Link><br />
            <Link to="/course/Angular">Angular</Link><br />
            <Link to="/course/Javascript">Javascript</Link><br />

            </div>
        )
    }
}
export default Welcome;