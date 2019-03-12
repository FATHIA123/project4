import React, { Component } from 'react';

class Senate extends Component {
// constructor(){
//     super();
//     this.state = {
//         senateData: this.props.senateData
//     }
// }
    render() {
        // console.log(this.props.senate);
        return (
            <div>
                <div>{this.props.senate.first_name} </div>
                
                {/* <div>hello world</div> */}
            </div>
        );
    }
}

export default Senate;