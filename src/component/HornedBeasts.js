// import React, { Component } from 'react'

// class HornedBeasts extends Component {
//     render() {
//         return (

//             <div>
//                 <h4>Title: {this.props.title}</h4>
//      {/* <img alt={'title'} image_url={this.props.image_url}/> */}

//      <img src = {this.props.image_url} alt={'title'}/>

//                 <p>
//                     Description: {this.props.description} <br/>
//                     Keyword: {this.props.keyword} <br/>
//                     Horns: {this.props.horns}  <br/>

//                 </p>
//             </div>
//         )
//     }
// }

// export default HornedBeasts

// ***********************************************//



// ************ Lab-02 ******************* //

import React, { Component } from 'react'

class HornedBeasts extends Component {

    constructor(props) {

        super(props);
        this.state = {
            initialValue: 0,
        }



    }
    animalVote = () => {

        this.setState({
            initialValue: this.state.initialValue + 1,

        })


    }

    render() {
        return (
            <>
    <h2>Title: {this.props.title} </h2>
    <img alt={'title'} src={this.props.image_url}/> 
<p>
    
Description: {this.props.description} <br/>    

Keyword: {this.props.keyword} <br/>

Horns: {this.props.horns}  <br/>

<button onClick = {this.animalVote}>Vote {this.state.initialValue}</button>
    
</p>                


                
            </>
        )
    }
}

export default HornedBeasts

