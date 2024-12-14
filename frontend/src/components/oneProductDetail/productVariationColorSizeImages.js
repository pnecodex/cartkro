import React, { Component } from 'react';

class ProductVariationColorSizeImages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const info = this.props.info

        return (

            <div>
                {(() => {
                    for (const [key, value] of Object.entries(info)) {
                        // console.log(infos[key],'value val');
                        // for (const key in Object.entries(infos)) {
                        for (const [ke, valu] of Object.entries(info)) {

                            // const element = infos[ke];
                            // console.log(valu,'color size ');   
                            // return <span> {element.color},{element.size}</span>

                        }
                        console.log(value.color, 'info in');
                    return     <select value={value} className="slct_qty">
                            {[...Array(value).keys()].map((row, index) => (
                                <option key={row} value={row.color}>{row.color}</option>
                            ))}
                        </select>
                        // return <span>{value.color}</span>
                    }
                    // if (typeof infos !== 'undefined' && infos && Object.keys(infos).length > 0) {
                    //     // You have an array 
                    //     var result = Object.entries([infos]);
                    //     result.map((row,index)=>(
                    //     <span>{row.color}</span>
                    //     ))
                    //     return console.log(result,'error hhanding ');
                    // }
                    // return 
                })()}
            </div>
        );
    }
}

export default ProductVariationColorSizeImages;