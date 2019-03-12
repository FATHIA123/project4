import React, { Component } from 'react';
import './Senate.css'
import {Link} from 'react-router-dom';



class Senate extends Component {
       
    render() {
        // console.log(this.props)
        return (
            <div className="senate">
                    <div >
                        <Link to= "/senator" ><img src={this.props.oneSenate.url} alt=""></img></Link>
                        <div>{this.props.oneSenate.name} </div>
                        <div>{this.props.oneSenate.party} </div>
                        <div>{this.props.oneSenate.since} </div>
                    </div>
            </div>

        );
    }
}

export default Senate;