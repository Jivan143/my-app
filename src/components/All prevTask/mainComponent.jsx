import React, { Component} from "react";
import NavBar from "./navBar";
class MainComponenet extends Component{
    
    render(){
        let count=10;
        let qty=24;
        return (
            <React.Fragment>
            <NavBar count={count}
            qty={qty} />

            </React.Fragment>
        );
    }
}
export default MainComponenet;