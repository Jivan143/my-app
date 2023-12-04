import React,{Component} from "react";
class Task2101 extends Component{
    state={
        arr:['A','B','C','1','2','3'],
        arr1:['0','1','2','3','4','5','6','7','8','9'],
        arr2:['M','N','0','1','2'],
        list:'',
        finallist:[],
        currentArray: null,
    };
    
    add=(str)=>{
        let s1={...this.state};
        s1.list +=str;
        this.setState(s1);
    }
    addlist = (lis) => {
        let newState = { ...this.state };

        if(lis ==''){
            return;
        }
        else if(newState.finallist.includes(lis)){
            alert('Code Already exist');
            return ;
        }
        newState.finallist.push(lis);
        newState.list = '';
        newState.currentArray = null;
        this.setState(newState);
      };
remove=(lis)=>{
    let s1={...this.state};
    s1.list='';
    s1.currentArray = null;
    this.setState(s1);

}
make = (arrayName) => {
    this.setState({ currentArray: arrayName,type:arrayName });
  };


    render(){
        let{arr,list,finallist,currentArray,type}=this.state;
   
        return(
            <div className="container ">
                <h2>Create New Code</h2>
                {currentArray !== null ? (
          <React.Fragment>
                <h5>Code  type :{type}</h5>  
                <h5>Code so far :{list}</h5>  
                      <div>
    
                {currentArray.map((ele)=>{
                    return(
                        <button className="btn btn-warning btn-sm m-2" onClick={()=>this.add(ele)}>{ele}</button>
                    )
                })}
           </div>
           <div className="col p-2">
           <button className="btn btn-primary btn-sm m-2" onClick={()=>this.addlist(list)}>Add New Code</button>
           <button className="btn btn-primary btn-sm m-2" onClick={()=>this.remove(list)}>Clear</button>
           </div>
           </React.Fragment>
        ) : (
                <div className="container">
              <div className="col p-2">
                <button className="btn btn-primary btn-sm m-2" onClick={() => this.make(this.state.arr)}>Code: ABC123</button>
                <button className="btn btn-primary btn-sm m-2" onClick={() => this.make(this.state.arr1)}>Code: 0-9</button>
                <button className="btn btn-primary btn-sm m-2"onClick={() => this.make(this.state.arr2)}>Code: MN012</button>
              </div>
              </div>
       )}
           <div className="col p-2">
            <h3>List of Codes Created</h3>
            {finallist.map((ele)=>{
               
                return(
                    <ul> <li>{ele}</li></ul>
                );
          
            })}
           </div>
            </div>
        )
        
    }
}
export default Task2101;