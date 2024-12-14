// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {Link} from 'react-router-dom';
// import { setCurrentUser } from '../actions/auth';
// import { Sellerfetch } from '../actions/seller';

// const  Sidebar =(props) =>{
//   // const user = useSelector(state=>state.users.users);
//   // console.log(user,'crunt user');
//   const sellerfetch = useSelector(state=>state.sellers.sellers);
//   const {name} = sellerfetch;
//   console.log(sellerfetch,'seller all');
//   const dispatch = useDispatch();
  
//   useEffect(()=>{
//     dispatch(Sellerfetch())
//     return () => {
        
// 		}
// 	},[])
//     return (

//       <aside className="main-sidebar sidebar-dark-primary elevation-4">
//         {/* Brand Logo */}
//         <div>
        
         
//         <a href="index3.html" className="brand-link">
//           <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
//           <span className="brand-text font-weight-light">admin</span>
//         </a>
//         {/* Sidebar */}
//         <div className="sidebar">
        
//           <div className="user-panel mt-3 pb-3 mb-3 d-flex">
//             <div className="image">
//               <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
//             </div>
//             <div className="info">
//     <a href="#" className="d-block">seller</a>
//             </div>
//           </div>
//           ))} 
//           </div>
//           {/* Sidebar Menu */}
//           <nav className="mt-2">
//             <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
//               {/* Add icons to the links using the .nav-icon class
//                with font-awesome or any other icon font library */}
//               <li className="nav-item has-treeview menu-open">
//                 <Link to="/dashboard" className="nav-link active">
//                   <i className="nav-icon fa fa-dashboard" />
//                   <p>
//                     Dashboard
//                     <i className="right fa fa-angle-left" />
//                   </p>
//                 </Link>

//               </li>
//              <li className="nav-item has-treeview menu-open">
//                 <Link to="/category" className="nav-link active">
//                   <i className="nav-icon" />
//                   <p>
//                     Category

//                   </p>
//                 </Link>

//               </li>
//               <li className="nav-item has-treeview menu-open">
//                 <Link to={`/product`} className="nav-link active">
//                   <i className="nav-icon" />
//                   <p>
//                     Product

//                   </p>
//                 </Link>
//               </li>

//               <li className="nav-item has-treeview menu-open">
//                 <Link to={`/productseller`} className="nav-link active">
//                   <i className="nav-icon" />
//                   <p>
//                     ProductSeller

//                   </p>
//                 </Link>
//               </li>

//                <li className="nav-item has-treeview menu-open">
//                 <Link to={`/allproductseller`} className="nav-link active">
//                   <i className="nav-icon" />
//                   <p>
//                     AllProductSeller

//                   </p>
//                 </Link>
//                </li>

//                 <li className="nav-item has-treeview menu-open">
//                 <Link to={`/allorders`} className="nav-link active">
//                   <i className="nav-icon" />
//                   <p>
//                     AllOrders

//                   </p>
//                 </Link>
//                </li>
//             </ul>
//           </nav>
//           {/* /.sidebar-menu */}
//         </div>
//         {/* /.sidebar */}
//       </aside>
//     );
//   }

// export default Sidebar;