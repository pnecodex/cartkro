import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alluser } from '../../actions/auth';



const Alluser = () => {
    // const userss = useSelector(state => state)
    const dispatch = useDispatch();
    
    dispatch(alluser())
    // console.log(userss);
    
    return ( 
        <div>
            Alluser
        </div>

     );
}
 
export default Alluser;