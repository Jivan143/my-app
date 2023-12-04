import React, {Component} from "react";
class CompB extends Component{
    state={counter:0};
    increment=()=>{
        this.setState({counter:this.state.counter+1});
    };
    componentDidMount(){
        const {name}=this.props.match.params
        console.log(`BBB : componntDidMount : counter= ${this.state.counter} name=${name}`);
    }
    componentDidUpdate(prevProps,prevState){
        const {name}=this.props.match.params
        console.log(`BBB : componentDidUpdate : counter= ${this.state.counter} name=${name}`);
        if(prevProps.match.params.name !==name){
        console.log("Reseting counter using setstate")
         this.setState({counter:0});
        }
    }
    componentWillUnmount(){
        const {name}=this.props.match.params

        console.log(`BBB : componentWillUnmount : counter= ${this.state.counter} name=${name}`);
    }
    shouldComponentUpdate(prevProps,prevState){
        const {name}=this.props.match.params
        console.log(`BBB : shouldComponentUpdate : counter= ${this.state.counter} name=${name}`);
        return true;
        
    }
    
    render (){
        const {counter} =this.state;
        const {name}=this.props.match.params;
        console.log(`BBB : render : counter= ${this.state.counter} name=${name}`);


        return (
            <div className="container bg-success texxt-dark">
                Component BBBB <br/>
                Counter : {counter}
                <button className="btn btn-danger btn-sm ml-3" onClick={()=>this.increment()}>Increment</button>
                <br />
                Name:{name}
            </div>
        );
    }

}
export default CompB;