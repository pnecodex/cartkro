import React, { useState } from 'react'
import JwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import apiCall from '../../apiCall';

function AccountVerified(props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const user = JwtDecode(Cookies.get('token'));
  const AccountVerified = async () => {
    try {
      setTimeout(async () => {
        setLoading(false);
        const data = await apiCall(`/auth/account-verification/${user.userId}`, 'patch', { verifiedAccount: 1 });
        setMessage(true);
      }, 1000);
      setLoading(true)
      setTimeout(() => {
        setMessage(false);
        props.history.push("/dashboard");
      }, 3000);

    } catch (error) {
      console.log(error, 'error for account');
    }

  }
  return (
    <div className="container">
      {message ? <div className="card">
        <div className='card-body'>
          <div className='card-title text-success'>Your Account Verified successfull</div>
        </div>
      </div> : null}
      <div className="card">
        <div className="card-title">
          <h2>Verified Account</h2>
        </div>
        <div className="card-body">
          <div className=''>
            <button onClick={AccountVerified} className="btn btn-primary d-flex align-item-left">Verified Account
              {loading ?

                <div className="spinner-border text-white" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                : ''}
            </button>
          </div>
        </div>
        <div className="card-footer">
          <p>user account verification for user security</p>
        </div>
      </div>
    </div>
  )
}

export default AccountVerified