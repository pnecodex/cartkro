import React from 'react';
import Navbar from './navbar';
import Content from './content';
// import Sidebar from './sidebar';
import Sidebar from './sidemenu';
import Footer from './footer';


const adminDashboardLayout = ({children})=>{
    return (
      <>
      <div className="wrapper">

          <Navbar/>
          <Sidebar/>
          	<div className="content-wrapper">
      	        {children}
            </div>
          <Footer/>

      </div>
      </>
    );
  }


export default adminDashboardLayout;