import Cookies from 'js-cookie';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import JwtDecode from 'jwt-decode';
export default (OriginalComponent) => {
	class MixedComponent extends Component {
		checkAuth() {
			if (Cookies.get('token')) {
				// this.props.history.push('/category');
			}else{
				// this.props.history.push('/')
			}
		}
		componentDidMount() {
			this.checkAuth()
		}
		render() {
			return <OriginalComponent/>;
		}
	}
	return (MixedComponent);
}