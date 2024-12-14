import React from 'react';
import Header from "./header"
import Footer from "./footer"
import SideBar from './sidebar';
const Layout = (props) => {
    return (
        <>
            <Header/>
            <hr />
            {props.children}
            {/* <SideBar/> */}
            {/* <hr/>
            <hr/> */}
            {/* <Footer /> */}
        </>
     );
}

export default Layout;