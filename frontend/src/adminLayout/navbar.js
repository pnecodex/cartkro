import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import { setCurrentUser } from '../actions/auth';
import apiCall from '../apiCall';
function Navbar(props) {
  // const user = useSelector((state)=>state.users);
  // console.log(user,'navbar setting');
  const [AccountVerified, setAccountVerified] = useState(true);
  const [loading, setLoading] = useState(true);
  // const user = useSelector(state => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = 1;
  const user = Cookies.get('token') ? JwtDecode(Cookies.get('token')) : "";

  useEffect(() => {
    if (Cookies.get('token')) {
      dispatch(setCurrentUser(Cookies, JwtDecode));
    }
    console.log(user.userId,)
    if (user.userId) {

      fetch(`http://localhost:4244/api/auth/account-unverified-user/${user.userId}`)
        .then((response) => {
          return response.json();
        })
        .then(data => {
          if (data.user == true) {

            setAccountVerified(true)

          } else {

            setAccountVerified(false);
          }
        })
        .catch(error => {
          console.log(error, 'error from apicall');
        });

      setTimeout(() => {
        setLoading(false)
      }, 400);
    }
  }, []);
  function AccountVerification() {
    return (
      <h5 className='alert-success'>Account Verified</h5>
    )
  }
  function AccountUnverification() {
    return (
      <div>
        <div>
          <h5 className='alert-danger'>Account Unverified</h5>
          <span className='small'>Please Check the email and verified your account</span>
        </div>
      </div>
    )
  }

  return (
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Contact</a>
        </li>

        <li className="nav-item d-none d-sm-inline-block">

          <a href="#" className="nav-link"></a>


        </li>

      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fa fa-comments-o" />
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger"><i className="fa fa-star" /></span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted"><i className="fa fa-star" /></span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning"><i className="fa fa-star" /></span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fa fa-bell-o" />
            <span className="badge badge-warning navbar-badge">{user.email}</span>
          </a>
          <a className="nav-link" data-toggle="dropdown" href="#">
            {

              loading ?
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div> :
                AccountVerified ?
                  <AccountVerification /> :
                  <AccountUnverification />}
            {/* {
              AccountVerified ?
                :
                <div>
                  <h5 className='alert-danger'>Account Unverified</h5>
                  <span className='small'>Please Check the email and verified your account</span>
                </div>

            } */}
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fa fa-envelope mr-2" /> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fa fa-users mr-2" /> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fa fa-file mr-2" /> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i className="fa fa-th-large" /></a>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;