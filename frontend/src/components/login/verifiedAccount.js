import React, { useState } from 'react';
import apiCall from '../../apiCall';
import JwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
function verifiedAccount() {
// const [loading, setLoading] = useState(false);

  const user = JwtDecode(Cookies.get('token'));
  const AccountVerified = async () => {
    // const data = await apiCall(`auth/account-verification/${user.userId}`,'put');
    // alert(loading)
  }
  return (
    <div className="container">
      {/* {loading ?
        <div className='h-100 d-flex align-item-center justify-content-center '>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> : ''} */}
      <div className="card">
        <div className="card-title">
          <h2>Verified Account</h2>
        </div>
        <div className="card-body">
          <div>
            <button onClick={AccountVerified} className="btn btn-primary">Verified Account</button>

          </div>
        </div>
        <div className="card-footer">
          <p>user account verification for user security</p>
        </div>
      </div>
    </div>
  );
}

export default verifiedAccount;