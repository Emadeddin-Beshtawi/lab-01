/////// Use rce extention /////////////

/////// <> </> called Fragment which contains multiple HTML elements /////////

import React, { Component } from 'react'


class Header extends Component {
    // export class Header extends Component (We've removed "export")//
    render() {
        return (
            <>
                <h1>New App for Lab 01</h1>
            </>
        )
    }
}

export default Header
