import React, { Component } from 'react';
import './Senate.css'
import Senate from './Senate'

class SenateList extends Component {
// constructor(){
//     super();
//     this.state = {
//         senateData: this.props.senateData
//     }
// }
    render() {
        // console.log(this.props.senate);
       let oneSenator = this.props.senate.map( (oneSenate, index) => {
           return (<Senate oneSenate={oneSenate}/>)
        })
           
        
        return (
            <div>
               {oneSenator}
               </div>
            );
      
    }
}

export default SenateList;
