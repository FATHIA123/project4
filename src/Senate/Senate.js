import React, { Component } from 'react';

class Senate extends Component {
       
    render() {
        // console.log(this.props)
        return (
            <div>
                    <div className="senate">
                        <img src={this.props.oneSenate.url} alt=""></img>
                        <div>{this.props.oneSenate.name} </div>
                        <div>{this.props.oneSenate.party} </div>
                        <div>{this.props.oneSenate.since} </div>
                    </div>
            </div>

        );
    }
}

export default Senate;