import React, { Fragment, useEffect, useState } from 'react'
// import { Item } from 'react-bootstrap/lib/breadcrumb';

function CheckImages(props) {
    // const imageOption = props.info.imagesgelleries.map((item,pos)=>{
    //     const classArr = [];
    //     if (pos === 0 && item.imagegellery) {
    //         return (
    //             <img key={pos} onClick={() => props.changeColor(item.imagegellery)} style={{width:'50px',height:'50px',margin:'1px'}} src={'http://localhost:4244/image/'+item.imagegellery} alt={props.info.color} />
    //             )

    //     // }else if(pos === 0 && !item.imagegellery){


    //         }
    // })
    useEffect(() => {
        // console.log(props.info.color,'infro');
    }, []);
    const [imageChange, setImageChnage] = useState([]);
    const [shownComments, setShownComments] = useState({});

    const toggleImages = id => {

        setShownComments(prevShownComments => ({
            ...prevShownComments,
            [id]: !prevShownComments[id]
        }));

        // $("select[name='size']").on("change",function(){
        //     if($("option:selected",$(this)).val()!="-1")
        //     {
        //         $("#spanSize").text($("option:selected",$(this)).text());
        //     var a   =  $("#unitPrice").text($("option:selected",$(this)).val());
        //         $("#totalPrice").text($("option:selected",$(this)).val());
        //         $("#quentity").text($("option:selected",$(this)).val());

        //     }
        //     else
        //     {
        //         //   return (
        //         //     <div className="warning">
        //         //       Warning!
        //         //     </div>
        //         //   );
        //         $("#spanSize").text("");
        //         $("#unitPrice").text($("this.state.price",$(this)).val());
        //         $("#totalPrice").text("");
        //     }
        // });


    };
    const onChangeColorImage = (pos) => {
        // alert('image')
        const [imagegellery] = props.info.imagesgelleries;
        console.log(imagegellery, 'imagegellery');
        // const colorImageChnage =  imagegellery;
        // alert(JSON.stringify(imagegellery))
        // setImageChnage({imagegellery: colorImageChnage});
    }
    return (

        <div style={{ display: 'inline' }}>

            {props.info.imagesgelleries.map((rowtow, index) => (

                <div style={{ display: 'inline' }}>
                    <div style={{ display: 'inline' }}>


                        {index === 0 ?

                            <img onClick={() => props.handleClickColorWithSize(props.info.variations) || toggleImages(rowtow.id) } onAuxClickCapture={() => props.changeColor(rowtow.imagegellery)} name="size" className="small" className="border" style={{ height: '50px', width: '38px' }} src={'http://localhost:4244/image/' + rowtow.imagegellery} title={'Click the' + ' ' + props.info.color} />
                            // <img onClick={() =>  toggleImages(rowtow.id) } onAuxClickCapture={() => props.changeColor(rowtow.imagegellery)} name="size" className="small" className="border" style={{ height: '50px', width: '38px' }} src={'http://localhost:4244/image/' + rowtow.imagegellery} title={'Click the' + ' ' + props.info.color} />
                            : null}
                    </div>
                    <div style={{ display: 'inline' }}>


                        {
                            shownComments[rowtow.id] ? props.info.imagesgelleries.map((rowtow, index) => (

                                <div style={{ display: 'inline' }}>
                                    <div style={{ display: 'inline' }}>

                                        <img onClick={() => props.changeColor(rowtow.imagegellery)} className="border" style={{ border: '1px solid', height: '50px', width: '38px', margin: '1px', display: 'inline' }} src={'http://localhost:4244/image/' + rowtow.imagegellery} title={'Click the' + ' ' + props.info.color} />
                                    </div>
                                </div>

                                //    <img src="" style="height:50px; width:38px" class="imgSwatch">
                            )) : null}

                    </div>

                </div>

            ))}

        </div>
    )
}

export default CheckImages
