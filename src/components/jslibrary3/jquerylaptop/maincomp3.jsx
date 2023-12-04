import React, { Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import Laptops from "./laptops";
import Laptop from "./laptop";
import NavBar3 from "./NavBar3";
class MainComp3 extends Component{
    state = {
        brands: ["Acer", "Apple", "Dell", "HP"],
        catagories: ["brand", "processor", "ram", "rating", "hardDisk"],
        laptops: [
          {model: "AX4581",brand: "Acer",ram: "4GB",hardDisk: "500GB",rating: "3",processor: "i3",
            image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "HB2881",brand: "HP",ram: "4GB",hardDisk: "250GB",rating: "4",processor: "i3",
            image:"https://www.transparentpng.com/thumb/laptop/ZR1xPu-laptop-png-image.png" ,
           },        
          {model: "DM811",brand: "Dell",ram: "4GB",hardDisk: "1TB",rating: "3",processor: "i3",
            image:"https://i.pinimg.com/474x/7a/52/44/7a52445038a88a4be1bf6a6b85d4e8ea--dell-latitude-notebook-laptop.jpg",
          },
          {model: "AP629",brand: "Acer",ram: "6GB",hardDisk: "1TB",rating: "2",processor: "i3",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
        },          
          {model: "AT820",brand: "Acer",ram: "8GB",hardDisk: "1TB",rating: "4",processor: "i5",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "HK008",brand: "HP",ram: "6GB",hardDisk: "250GB",rating: "3",processor: "i5",
          image:"https://www.transparentpng.com/thumb/laptop/ZR1xPu-laptop-png-image.png" ,
        },
          {model: "MAir11",brand: "Apple",ram: "4GB",hardDisk: "128GB",rating: "4",processor: "i5",
          image:"https://i.insider.com/5a26db353dbef4ae448b9e69?width=600&format=jpeg&auto=webp",
          },
          {model: "MPro24X",brand: "Apple",ram: "8GB",hardDisk: "256GB",rating: "4",processor: "i7",
          image:"https://i.insider.com/5a26db353dbef4ae448b9e69?width=600&format=jpeg&auto=webp",
          },
          {model: "DL390",brand: "Dell",ram: "6GB",hardDisk: "500GB",rating: "3",processor: "i3",
          image:"https://i.pinimg.com/474x/7a/52/44/7a52445038a88a4be1bf6a6b85d4e8ea--dell-latitude-notebook-laptop.jpg",
        },
          {model: "AM954",brand: "Acer",ram: "8GB",hardDisk: "1TB",rating: "3",processor: "i7",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "AB234",brand: "Acer",ram: "4GB",hardDisk: "250GB",rating: "2",processor: "i3",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "HC874",brand: "HP",ram: "8GB",hardDisk: "1TB",rating: "1",processor: "i7",
          image:"https://www.transparentpng.com/thumb/laptop/ZR1xPu-laptop-png-image.png" ,
        },
          {model: "AN2015M",brand: "Acer",ram: "8GB",hardDisk: "1TB",rating: "4",processor: "i5",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "AB235P",brand: "Acer",ram: "4GB",hardDisk: "500GB",rating: "3",processor: "i5",
          image:"https://th.bing.com/th/id/OIP.oQxaVh_q6IHcU6VhbSmoFwAAAA?pid=ImgDet&w=400&h=307&rs=1",
          },
          {model: "HV5612",brand: "HP",ram: "8GB",hardDisk: "1TB",rating: "5",processor: "i7",
          image:"https://www.transparentpng.com/thumb/laptop/ZR1xPu-laptop-png-image.png" ,
          },
          {model: "HJ9803",brand: "HP",ram: "6GB",hardDisk: "500GB",rating: "4",processor: "i3",
          image:"https://www.transparentpng.com/thumb/laptop/ZR1xPu-laptop-png-image.png" ,
          },
        ],
      };
    

    render(){
        const {brands,catagories,laptops}=this.state;
        return (
            <div className="container">
                <NavBar3  brands={brands}  />
                <Switch>
                <Route path="/all/:page" render={(props)=><Laptops {...props} laptops={laptops} />} />
                <Route path="/laptop/:model" render={(props)=><Laptop {...props} laptops={laptops} />} />
                <Redirect from="/" to="/all/1" />
                </Switch>
            </div>
        )

    }

}
export default MainComp3;