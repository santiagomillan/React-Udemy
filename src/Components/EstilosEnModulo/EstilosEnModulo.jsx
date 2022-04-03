import React,{Component} from 'react'
import styles from './EstilosEnModulo.module.css'

class EstilosEnModulo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    state = {  }
    render() { 
        return ( 
            <>
            <h1 className={styles.titulo}>Es un modulo gono</h1>
            </>
         );
    }
}
 
export default EstilosEnModulo;