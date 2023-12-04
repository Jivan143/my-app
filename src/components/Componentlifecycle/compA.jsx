import React, {Component} from "react";
class CompA extends Component{
    state={counter:0};
    increment=()=>{
        this.setState({counter:this.state.counter+1});
    };
    componentDidMount(){
        console.log(`AAA : componntDidMount : counter= ${this.state.counter}`);
    }
    componentDidUpdate(prevProps,prevState){
        console.log(`AAA : componentDidUpdate : counter= ${this.state.counter}`);
    }
    componentWillUnmount(){
        console.log(`AAA : componentWillUnmount : counter= ${this.state.counter}`);
    }
    shouldComponentUpdate(prevProps,prevState){
        console.log(`AAA : shouldComponentUpdate : counter= ${this.state.counter}`);
        return true;
    }
    render (){
        const {counter} =this.state;
        console.log(`AAA : render : counter= ${this.state.counter}`);

        return (
            <div className="container bg-warning texxt-dark">
                Component AAAA <br/>
                Counter : {counter}
                <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.increment()}>Increment</button>
                <br />
            </div>
        );
    }

}
export default CompA;