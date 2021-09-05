/////// Use rce extention /////////////
/////// <> </> called Fragment which contains multiple HTML elements /////////


import React, { Component } from 'react'

class Footer extends Component {
// export class Footer extends Component (We've removed "export")//

    render() {
        return (
            <>
               <h1>All rights are reserved. Emadeddin Beshtawi &copy;</h1> 
            </>
        )
    }
}

export default Footer
