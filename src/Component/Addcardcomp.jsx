import React, { Component } from "react";

class Addcardcomp extends  Component{

    state ={
         
        count :7
    };

    handleadd =()=>{
      this.setState({count :this.state.count+1})
    }

    handlesub =()=>{

        if(this.state.count==0){this.setState({ count:this.state.count=0})

        }else{
            this.setState({ count:this.state.count-1})
        }
    
    }
    render(){
        return(
         
         <div>

           <h1>count : {this.state.count}</h1>
            <button onClick={this.handleadd}>Add</button>

            <button onClick={this.handlesub}>sub</button>
        </div>    
        )
    }
}

export default Addcardcomp