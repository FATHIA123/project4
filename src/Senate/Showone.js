import React, { Component } from 'react';

class Showone extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                 <div >
                        <img src={this.props.senateData.url} alt=""></img>
                        <div>{this.props.oneSenate.name} </div>
                        <div>{this.props.oneSenate.party} </div>
                        <div>{this.props.oneSenate.since} </div>
                    </div>


                    <div className='individualEntry' key={this.state.expenses._id}>  
                            <span className='revenueName'>{this.state.expenses.name}</span >      
                            <span className='revenueAmount'> ${this.state.expenses.amount} 
                             </span>             
                </div> 


            </div>
        );
    }
}

export default Showone;