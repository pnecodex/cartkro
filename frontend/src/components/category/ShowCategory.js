import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchAllChildCategory, fetchCategory } from '../../actions/category';
import { NavLink } from 'react-router-dom';


class showCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
          }
    }
    componentDidMount() {
        console.log(this.props);
        
        // this.props.fetchCategorys()
        this.props.fetchAllChildCategory()
    }
 
    render(){
        //  const cateogories = this.props.category.map(function(item,index){
        // return <div key={index}>{item.title}</div>
        // })
        
    return (
    

        <div className="container">
            <div className="text-center" >
                <nav className="nav_cate">

                <ul className="ul_cate">
                {this.props.category.map((row, index) => ( 
                <li><a href="#">{row.categories.title}</a>

                <ul class="dropdown">
                {/* <li><a hr-ef="#">{row.name}</a></li> */}
                {/* <li><a href="#">about us</a></li> */}
                {/* <li><a href="#">services</a></li> */}
                <li><a href="#">{row.subcategories.name}</a>
                
                <ul class="dropdown_childcategory">
                    
                <li><a href="#">{row.name}</a></li>
                {/* <li><a href="#">about us</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">Childcategory</a>
                
                </li> */}
               
                </ul>

                </li>
                </ul>


                </li>
                ))}
              

                </ul>
                </nav>
               <h2>Category Component</h2>
                    <NavLink to="/create_category" className="btn btn-primary float-right">New Category</NavLink>
                                <table className="table table-striped ">
                                    <tr className="bd-dark">
                                        <th scope="col">#</th>
                                        <th scope="col">title</th>
                                        <th scope="col">description</th>
                                    </tr>
              

                           
              </table>

           </div>
        </div>    
        
    )
  }
}




const mapStateToProps = (state)=>{
    console.log(state);
    
    return{
        
        category:state.categories.categories
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return{
        
        fetchCategorys:()=>{
            dispatch(fetchCategory())
        },
        fetchAllChildCategory:()=>{
            dispatch(fetchAllChildCategory())
        }
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(showCategory);