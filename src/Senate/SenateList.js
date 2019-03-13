import React, { Component } from 'react';
// import Senate from './Senate'
import {Link} from 'react-router-dom';


class SenateList extends Component {

    render() {
        // console.log(this.props.senate);
        let oneSenator = this.props.senate.map( (oneSenate) => {
            // console.log(oneSenate)
            // return (<Senate oneSenate={oneSenate} key={index} />)
            return (<div className="senate" key={this.props.senate._id}>
                                <div >
                                <Link to={`/senator/${this.props.senate._id}`}><img src={oneSenate.url} alt=""></img></Link>
                                    <div>{oneSenate.name} </div>
                                    <div>{oneSenate.party} </div>
                                    <div>{oneSenate.since} </div>
                                </div>
                     </div>)
        })
        
        
        return (
            <div >
               {oneSenator}
            
               </div>
            );
      
    }
}

export default SenateList;
