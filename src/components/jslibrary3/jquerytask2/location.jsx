import React, { Component } from "react";

class Location extends Component {
    render() {
        const { offices } = this.props;
        const { city } = this.props.match.params;
        const location = offices.find((office) => office.city === city);

        return (
            <div className="container">
                <h4>Welcome to the Office of JX Company in {location.city}</h4>
                        <h6>Address: {location.address}</h6>
                    </div>
                
            
        );
    }
}

export default Location;
