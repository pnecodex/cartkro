import React from "react";
import { useForm } from "react-hook-form";

const FormHook = (props) => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { errors, watch, handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(props.handleSubmits)}>
      <div className="form-group inventory-item">
        <label htmlFor="exampl eInputEmail1">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className={` form-control ${  errors.title ? "input-field" : null}`}
          placeholder="Enter Title"
          defaultValue={props.title}
          onChange={props.handleChange}
          ref={register({
            required: "Enter the your name",
            pattern: {
              message: "Enter the your name"

            }
          })}
        />
        {errors.title && <span><span className="span2">&#9888;</span>{errors.title.message}</span>}

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          className="form-control"
          placeholder="Enter Description"
          defaultValue={props.description}
          onChange={props.handleChange}
        />

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Product Price</label>
        <input
          type="text"
          id="price"
          name="price"
          className="form-control"
          placeholder="Enter price"
          defaultValue={props.price}
          onChange={props.handleChange}
        />

      </div>
      <div className="form-group">
        <label>image</label>
        <input
          type="file"
          id="image"
          name="image"
          className="form-control"
          onChange={props.fileTransform}
        />
        {props.uploadImage ?
          <img src={props.imageName} />

          : <img src={props.image ? `http://localhost:8000/uploads/product/${props.image}` : props.imagedefault} width="200px" />

        }
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          data-start_id="start_id"
          className="form-control"
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          data-end_id="end_id"
          className="form-control"
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dsicount_price">Discount Price</label>
        <input
          type="text"
          id="discount_price"
          name="discount_price"
          className="form-control"
          placeholder="Enter Discount price"
          onChange={props.handleChange}
        />
      </div>
      {/* <div className="form-group">
        <label className="mr-sm-2">Catelogue a product</label>
        <div className='select-category'>Select A Category</div>
        {this.state.loading ?
          <div className='h-100 d-flex align-item-center justify-content-center '>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> :
          this.state.catelogueActive == true ?
            <SubCatelogue sub_catelogues={this.state.sub_catelogues} handleCategories={this.handleCategories} />
            :
            <ul className="catelogue">
              {this.props.category.map((catelogue, index) => (
                <li className="categories" name="catalog_id" key={catelogue.id} value={catelogue.id} data-id={catelogue.id} onClick={(e) => this.handleCategories(e, catelogue.id)}>{catelogue.cataloguename}</li>
              ))}
            </ul>
        }
      </div> */}
      <button type="submit" className="btn btn-primary">{1 ? "Update" : "Submit"}</button>
    </form>
  )
}
export default FormHook;