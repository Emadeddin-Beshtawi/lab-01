/////// Use rce extention /////////////
/////// <> </> called Fragment which contains multiple HTML elements /////////

import React, { Component } from 'react'

///// To import HornedBeadts Component within Main Component /////

import HornedBeasts from './HornedBeasts'

// props is an object inherited from the react component class and it used to pass data. Namely, hold a set of data and pass it from one component to another component//



class Main extends Component {
    render() {
        let animals = [
            {
                image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                title: "UniWhal",
                description: "A unicorn and a narwhal nuzzling their horns",
                keyword: "narwhal",
                horns: 1
            },
            {
                image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
                title: "Rhino Family",
                description: "Mother (or father) rhino with two babies",
                keyword: "rhino",
                horns: 2
            },
            {
                image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
                title: "Unicorn Head",
                description: "Someone wearing a creepy unicorn head mask",
                keyword: "unicorn",
                horns: 1
            }

        ];
        return (
            <>

                <h1>Three HornedBeast</h1>
                {
                    animals.map(z => {
                        return <HornedBeasts image_url={z.image_url} title={z.title} description={z.description} keyword={z.keyword} horns={z.horns}/>
    }

                    )
                }


            </>
        )
    }
}


export default Main

