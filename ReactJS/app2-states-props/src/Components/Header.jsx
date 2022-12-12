import { Component } from "react";

class Header extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return <div style={{background:"grey",color:'white',padding:10,fontWeight:"bold"}}>{this.props.message}</div>
    }
}
export default Header