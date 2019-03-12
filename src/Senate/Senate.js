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
                <div>
            <img src="https://theunitedstates.io/images/congress/225x275/K000384.jpg" alt="timothy kaine"/>
            <img src="https://theunitedstates.io/images/congress/225x275/W000805.jpg" alt="mark warner" width="225" height="275"/>
        </div>
                {/* <div>hello world</div> */}
            </div>
        );
    }
}

export default Senate;
