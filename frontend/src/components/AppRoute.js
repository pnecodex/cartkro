import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (

   <Route
      {...rest} render={props => (
         <Layout>
            {
               // Cookies.get('token') ?
                  <Component {...props} />
                  // : <Redirect to="/login" />
            }

         </Layout>
      )}
   />
);



export default AppRoute;