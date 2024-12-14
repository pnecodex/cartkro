import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchOneProductseller, } from '../../actions/userproduct';
import { fetchProductVariation } from '../../actions/productVariationAction';
import apiCall from '../../apiCall';
import CheckImages from './checkImages';
import CheckSizes from './checksizes';
import { addToCart } from '../../actions/cart';
import $ from 'jquery';
import { ThemeProvider } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartShow from '../product/CartShow';
import cookies from 'js-cookie';
// const cookies = new Cookies()
// window.jQuery = $;
// window.location.reload();
class OneProductdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            stock: '',
            image: null,
            productvariations: '',
            responese: [],
            distinct: [],
            distinctlist: '',
            images: {},
            qty: 1,
            saleprice: '',

            isZoomOnSide: true,
            showOverlay: false,
            overlayLeft: 0,
            overlayTop: 0,
            zoomInLeft: 0,
            zoomInTop: 0,
            zoomInMaxWidth: 0,
            selectedOption: '',
            qtyStock: 1,
            priceWithsize: ''
        }
        this.changeImages = this.changeImages.bind(this);
        const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
        console.log(qty, 'qty constructer');
    }
    // image zooming
    onMouseMove = e => {
        const overlayNode = !this.overlay ? {} : this.overlay;
        const imageNode = !this.image ? {} : this.image;
        const zoomInImageNode = !this.zoomInImage ? {} : this.zoomInImage;
        const zoomInWindowNode = !this.zoomInWindow ? {} : this.zoomInWindow;
        const zoomInWindowWidth = zoomInWindowNode.clientWidth;
        const overlayWidth = overlayNode.clientWidth || 550;
        const imageWidth = imageNode.clientWidth;
        const imageHeight = imageNode.clientHeight;
        const zoomInImageWidth = zoomInImageNode.clientWidth;
        const zoomInImageHeight = zoomInImageNode.clientHeight;
        const offsetLeft = imageNode.offsetLeft;
        const offsetTop = imageNode.offsetTop;
        const overlayLeft = Math.min(
            Math.max(
                e.clientX - overlayWidth / 2,
                offsetLeft
            ),
            offsetLeft + imageWidth - overlayWidth
        );
        const overlayTop = Math.min(
            Math.max(
                e.clientY - overlayWidth / 2,
                offsetTop
            ),
            offsetTop + imageHeight - overlayWidth
        );
        const zoomInLeft = -(overlayLeft - offsetLeft) / imageWidth * zoomInImageWidth;
        const zoomInTop = -(overlayTop - offsetTop) / imageHeight * zoomInImageHeight;
        const zoomInMaxWidth = zoomInWindowWidth / (overlayWidth / imageWidth);
        this.setState({
            overlayLeft,
            overlayTop,
            zoomInLeft,
            zoomInTop,
            zoomInMaxWidth
        });
    };

    toggleOverlay = showOverlay =>
        () => this.setState({ showOverlay: showOverlay });
    onSwitchButtonClick = () =>
        this.setState(prevState => ({
            isZoomOnSide: !prevState.isZoomOnSide
    }));
    changeImages(id) {
        // this.setState(prev => prev.images !== id ? id : {});
        this.setState(prevState => ({
            images: !prevState.images
        }));

        // this.setState(prevState => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false} );
        // let key = id = false `${result.id}IsShown`;
        // this.setState({[key]: !this.state[key]});

        // this.setState(prevShownComments => ({
        //     ...prevShownComments,
        //     [id]: !prevShownComments[id]
        //   }));

        // console.log(id, 'image id');
    }

    componentDidMount = async () => {
        const productIdparams = this.props.match.params.id;
        const id = this.props.match.params.id;
        try {
            const res = await apiCall(`/product_variation_one/${id}`, 'get');
            const responese = await res.data.productVariationOne;
            this.setState({
                responese
            })
            // const {imagesgelleries:{imagegellery}} = responese;
            console.log(responese, 'action product images varation');
        } catch (e) {

            return new Error(e, 'server side error')
        }
        // this.props.fetchProductVariation(id)
        await this.props.fetchOneProductseller(productIdparams);
        //    console.log(this.props.productvariationimagedetails,'all product variationimages');
        //    console.log(this.props.imagesvariation,'all product variationimages');
        var unique = [];
        var distinct = [];
        for (var i = 0; i < this.state.responese.length; i++) {
            if (!unique[this.state.responese[i].color]) {
                distinct.push(this.state.responese[i].color);
                unique[this.state.responese[i].color] = 1;
            }
            // console.log(distinct, 'distincts');
            this.setState({
                distinct
            })
        }
        const [...rest] = this.state.distinct;
        // console.log(rest, 'valur color');
        //  {this.state.distinct.map((element)=>(<span>{element}</span>))}
    }
    handleAddToCart = () => {
        // this.props.history.push(`/cart/`${this.props.match.params.id}"qty=" + this.state.qty)
        this.props.history.push(`/cart/${this.props.match.params.id}?qty=${this.state.qty}`);
    }
    handleQty = (e) => {
        const qty = e.target.value
        const qtyStock = e.target.value
        this.setState({
            qty: qty,

        })
    }
    handleQtyStock = (e) => {
        const qty = e.target.value
        const qtyStock = e.target.value
        this.setState({

            qtyStock: qtyStock
        })
    }
    sizeHandlePrice = () => {
        $("select[name='size']").on("change", function () {
            if ($("option:selected", $(this)).val() != "-1") {
                $("#spanSize").text($("option:selected", $(this)).text());
                $("#unitPrice").text($("option:selected", $(this)).val());
                $("#totalPrice").text($("option:selected", $(this)).val());
                //   var q = this.val();
                // console.log(q,'qty show');
            }
            else {
                //   return (
                //     <div className="warning">
                //       Warning!
                //     </div>
                //   );
                $("#spanSize").text("");
                $("#unitPrice").text($("this.state.price", $(this)).val());
                $("#totalPrice").text("");
            }
        });
    }
    componentDidUpdate(prevProps, preState) {
        if (prevProps.productsellerdetails !== this.props.productsellerdetails) {
            var product = this.props.productsellerdetails;
            // console.log(product, 'product one');
            this.setState({
                name: product.name,
                price: product.price,
                stock: product.stock,
                image: product.image,
                // saleprice:product.saleprice
                // productvariations: product.productvariations,
            })
        }

    }

    changeColor = (pos) => {
        const [imageGellery] = this.state.responese;
        const { imagesgelleries } = imageGellery;

        console.log(imagesgelleries, 'image');

        console.log(pos, 'object images')
        this.setState({ image: pos })
        sessionStorage.setItem('images', JSON.stringify(pos));
        // console.log( 
        sessionStorage.getItem('images', pos)

        //  );
    }


    // doThisOnChange = ( value, optionIndex ) => {
    //     if ( optionIndex != null )
    //     {
    //         var option = document.getElementById( "sel" ).options[optionIndex];
    //         option = false;
    //         value = option.value;
    //         console.log(option,'opt');
    //     }
    //     // alert( "Do something with the value: " + value );
    // }

    // handleChange = event => {
    //     alert('color')
    //     this.setState({selectedOption: event.target.value});
    // }

    handleClickColorWithSize = (pos) => {
        // console.log({ selectedOption: pos }, 'console.log size')
        console.log(this.state.selectedOption, 'console.log size')
        this.setState({ selectedOption: pos });
        // sessionStorage.setItem('size')
        // const [qty] = this.state.selectedOption;
        // console.log(qty,'qty in side');
    }
    changeSizeWithQty = (pos) => {
        console.log(pos, 'console.log qty')
        this.setState({ qtyStock: pos });
        sessionStorage.setItem('sizeWtihQty', pos)
        alert(JSON.stringify({ qtyStock: pos }));
    }

    sizePriceHandle = (e) => {
        console.log(e.target.value, 'size');
        console.log(e.target.valueLink, 'price');

        this.setState({ priceWithsize: e.target.value });
        const id = this.props.match.params.id;
        sessionStorage.setItem('sizeWithPrice', e.target.value)
        sessionStorage.setItem('sizeWithPriceId', id)
    }
    render() {
        // cookies.set('name','programmer', { path: '/' });

        const {
            showOverlay,
            overlayLeft,
            overlayTop,
            zoomInLeft,
            zoomInTop,
            zoomInMaxWidth,
            isZoomOnSide
        } = this.state;
        const overlayStyle = {
            left: overlayLeft,
            top: overlayTop
        };
        const zoomInImageStyle = {
            left: zoomInLeft,
            top: zoomInTop
        };
        if (zoomInMaxWidth && isZoomOnSide) {
            zoomInImageStyle['max-width'] = zoomInMaxWidth;
        }

        let showQty;
        if (this.state.stock) {
            showQty = <select defaultValue={this.state.qty} onChange={this.handleQty}>
                {[...Array(this.state.stock).keys()].map((rowt, index) => (
                    // console.log(rowt, 'aaqty')
                    <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                ))}

            </select>

        } else {
            showQty = <select defaultValue={this.state.qtyStock} onChange={this.handleQty}>
                {
                    // this.state.selectedOption && this.state.selectedOption.map((row, index) => (
                    [...Array(this.state.qtyStock).keys()].map((rowt, index) => (
                        // console.log(rowt, 'aaqty')
                        <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                    ))
                    // <option key={row + 1} value={row.qty}>{row.qty}</option>
                    // ))

                }
            </select>
        }
        let showStock
        if (this.state.qtyStock) {
            showStock = <select defaultValue={this.state.qtyStock} onChange={this.handleQty}>
                {
                    // this.state.selectedOption && this.state.selectedOption.map((row, index) => (
                    [...Array(this.state.qtyStock).keys()].map((rowt, index) => (
                        // console.log(rowt, 'aaqty')
                        <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                    ))
                    // <option key={row + 1} value={row.qty}>{row.qty}</option>
                    // ))

                }
            </select>
        } else {
            showStock = <select defaultValue={this.state.qtyStock} onChange={this.handleQty}>
                {
                    // this.state.selectedOption && this.state.selectedOption.map((row, index) => (
                    [...Array(this.state.qtyStock).keys()].map((rowt, index) => (
                        // console.log(rowt, 'aaqty')
                        <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                    ))
                    // <option key={row + 1} value={row.qty}>{row.qty}</option>
                    // ))

                }
            </select>
        }

        return (
            <div className>
                {/* {cookies.get('name')} */}
                {/* <CartShow hidden /> */}
                <div className="row">
                    {/* <button className="SwitchButton" type="button" onClick={this.onSwitchButtonClick}>
                    {isZoomOnSide ? 'Zoom Outside' : 'Zoom Inside'}
                    </button> */}
                    <div
                        className="OriginalImageContainer"
                        onMouseMove={this.onMouseMove}
                        onMouseEnter={this.toggleOverlay(true)}
                        onMouseLeave={this.toggleOverlay(false)}
                        className="col-lg-5 border">

                        <img
                            className="OriginalImage"
                            ref={image => this.image = image}
                            src={`http://localhost:4244/image/` + this.state.image} title="product" />
                        {showOverlay && isZoomOnSide && (
                            <span
                                ref={overlay => this.overlay = overlay}
                                style={overlayStyle}
                            />
                        )}
                        {showOverlay && !isZoomOnSide && (
                            <div
                                ref={zoomInWindow => this.zoomInWindow = zoomInWindow}
                                className="ZoomInWindowInside"
                            >
                                <img
                                    className="ZoomInWindow-Image"
                                    ref={zoomInImage => this.zoomInImage = zoomInImage}
                                    style={zoomInImageStyle}
                                    src={`http://localhost:4244/image/` + this.state.image}
                                />
                            </div>
                        )}

                    </div>
                    {showOverlay && isZoomOnSide && (
                        <div
                            ref={zoomInWindow => this.zoomInWindow = zoomInWindow}
                            className="ZoomInWindow"
                        >
                            <img
                                className="ZoomInWindow-Image"
                                ref={zoomInImage => this.zoomInImage = zoomInImage}
                                style={zoomInImageStyle}
                                src={`http://localhost:4244/image/` + this.state.image}
                            />
                        </div>
                    )}



                    <div className="col-lg-5">
                        <div>title<strong>{this.state.name}</strong> </div>
                        <div id="unitPrice"><Link>Price</Link><strong>{this.state.priceWithsize > 0 ? this.state.priceWithsize : this.state.price}</strong></div>
                        {/* <div id="unitPrice" hidden= {this.state.priceWithsize<0} value="">Price<strong>{this.state.priceWithsize}</strong></div> */}
                        {/* <div id="spanSize">Price<strong>{this.state.quentity}</strong></div> */}
                        {/* <div id="quentity">Price<strong>{this.state.quentity}</strong></div> */}

                        <div>
                            {/* Qty: {showQty } */}
                            Qty: <div>
                                {showStock != 0 ? showStock : null}
                                {showQty != 0 ? showQty : showStock}
                            </div>
                            {/* <select defaultValue={this.state.qtyStock} >
                                <option value="" key="">Select</option>
                                {
                                    // this.state.selectedOption && this.state.selectedOption.map((row, index) => (
                                        [...Array(this.state.qtyStock).keys()].map((rowt, index) => (
                                            // console.log(rowt, 'aaqty')
                                            <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                                        ))
                                        // <option key={row + 1} value={row.qty}>{row.qty}</option>
                                    // ))
                                 
                                }
                            </select> */}
                            {/* Qty: {showQty} */}
                            {/* <select defaultValue={this.state.qty} onChange={this.handleQty}>
                                    {    [...Array(this.state.stock).keys()].map((rowt, index) => (
                                            // console.log(rowt, 'aaqty')
                                            <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
                                        ))}
                                     
                            </select>  */}

                        </div>



                        <div >
                            <div >
                                <p > Select Size</p>
                                {/* <select id="sel" defaultValue={this.state.selectedOption} onChange={this.sizeHandlePrice} name="size" className="small">
                                    <option value="-1" >Select</option> */}

                                <CheckSizes sizePriceHandle={this.sizePriceHandle} changeSizeWithQty={this.changeSizeWithQty} selectedOption={this.state.selectedOption} />
                                {/* {this.state.selectedOption && this.state.selectedOption.map((row, index) => (
                                        //  this.state.selectedOption.map((element,index) => (

                                        <option  value={row.saleprice} value={row.qty}>{row.size}</option>
                                        //  ))
                                    ))} */}

                                {/* </select> */}
                                {/* {this.state.responese.map((row, index) => (      
                                    <div>All Colors:{this.changeColor === true ? row.color:null}</div>
                                    ))} */}
                                {/* <div className="col-sm-5" style={{display:'inline',backgroundColor:'black'}}>  */}

                            </div>
                        </div>




                        {this.state.responese.map((row, index) => (
                            // <li style={{ display: 'inline' }}>
                            <CheckImages handleClickColorWithSize={this.handleClickColorWithSize} changeColor={this.changeColor} info={row} />

                            // </li>



                        ))}



                    </div>
                    <div className="col-lg-2" >

                        <button type="submit" className="botton" onClick={this.handleAddToCart}>Add To Card</button>
                    </div>
                </div>
            </div>


        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);

    return {
        // productvariationimagedetails:state.productvariationimagedetails.productvariationimagedetails,   
        productsellerdetails: state.productsellerdetails.productsellerdetails,
        // imagesvariation: state.imagesvariation.imagesvariation,

    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {

        fetchOneProductseller: (idone) => {
            dispatch(fetchOneProductseller(idone))
        },
        addToCart: (id, qty) => {
            dispatch(addToCart(id, qty))
        }
        // fetchProductVariation: (id) => {
        //     dispatch(fetchProductVariation(id))
        // },



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OneProductdetails);
// export default OneProductdetails;