import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (

            <div>
                <h4>Title: {this.props.title}</h4>
     {/* <img alt={'title'} image_url={this.props.image_url}/> */}

     <img src = {this.props.image_url} alt={'title'}/>

                <p>
                    Description: {this.props.description} <br/>
                    Keyword: {this.props.keyword} <br/>
                    Horns: {this.props.horns}  <br/>
                
                </p>
            </div>
        )
    }
}

export default HornedBeasts
