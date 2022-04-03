import React,{Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state= { 
            name:"Camila",
            apellidos:"Rojas Peralta"
         };
    }

    cambiarDatos(){
        if(this.state.name==="Camila" && this.state.apellidos==="Rojas Peralta"){
            this.setState({name:"Mi" ,apellidos:"Crespa"})    
        }
        else{
            this.setState({name:"Camila" ,apellidos:"Rojas Peralta"})
        }
        
    }

    state = {  }
    render() { 
        return ( 
            <>
                <h2>Mi nombre es {this.state.name} {this.state.apellidos}</h2>
                <button onClick={this.cambiarDatos.bind(this)}>tocame</button>
            </>
         );
    }
}
 
export default State;