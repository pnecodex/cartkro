import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../actions/auth';
import { Sellerfetch } from '../actions/seller';

class sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.Sellerfetch();
    this.props.setCurrentUser()
  }
  render() {
    return (

      <aside className="main-sidebar sidebar-dark-primary elevation-4">        
        <a href="/" className="brand-link">
          <h4 className="brand-text text-white">Crust Craft</h4>
        </a>
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">Admin</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">

          {/* {this.props.sellers.map((row,index)=>(
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <Link>
               <img src={row.sellerimage} className="img-circle elevation-2" alt="User Image" />
            </Link>
          </div>
          <div className="info">
            <a href="#" className="d-block">{row.name}</a>
          </div>
        </div>
          ))} */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <Link to="/dashboard" className="nav-link active">
                  <i className="nav-icon fa fa-dashboard" />
                  <p>
                    Dashboard
                    <i className="right fa fa-angle-left" />
                  </p>
                </Link>

              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/category" className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    All Users
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to="/category" className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Add a Category
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to={`/product`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Add a product
                  </p>
                </Link>
              </li>

              <li className="nav-item has-treeview menu-open">
                <Link to={`/productseller`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Add a Team member 
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to={`/productseller`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Manage Faqs 
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to={`/add_variation`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                   All Customer emails
                  </p>
                </Link>
              </li>

              <li className="nav-item has-treeview menu-open">
                <Link to={`/allproductseller`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Subcriber users
                  </p>
                </Link>
              </li>

              <li className="nav-item has-treeview menu-open">
                <Link to={`/allorders`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    All Orders
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to={`/allorders`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Privacy policy
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview menu-open">
                <Link to={`/allorders`} className="nav-link active">
                  <i className="nav-icon" />
                  <p>
                    Setting
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);

  return {
    ...state,
    sellers: state.sellers.sellers
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);

  return {
    Sellerfetch: () => {
      dispatch(Sellerfetch())
    },
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    }


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(sidemenu);