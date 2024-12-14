import React, { Fragment, useEffect, useState } from 'react'
import $, { uniqueSort } from 'jquery'
function CheckSizes(props) {
    // console.log(props.info,'size variation');
    useEffect(() => {
        // console.log(props.info.color,'infro');
    }, []);
    const [shownComments, setShownComments] = useState({});

    const toggleImages = id => {

        setShownComments(prevShownComments => ({
            ...prevShownComments,
            [id]: !prevShownComments[id]
        }));

        $("select[name='size']").on("change", function () {
            if ($("option:selected", $(this)).val() != "-1") {
                $("#spanSize").text($("option:selected", $(this)).text());
                var a = $("#unitPrice").text($("option:selected", $(this)).val());
                $("#totalPrice").text($("option:selected", $(this)).val());
                $("#quentity").text($("option:selected", $(this)).val());

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


    };
   const sizeHandlePrice = (e) =>{
    console.log(e.target.value,'size price');
    console.log(e.target.id,'size price');
        // $("select[name='size']").on("change",function(){
        //     if($("option:selected",$(this)).val()!="-1")
        //     {
        //         $("#spanSize").text($("option:selected",$(this)).text());
        //         $("#unitPrice").text($("option:selected",$(this)).val());
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
    }
    return (
        <Fragment>
              {/* <select defaultValue={props.selectedOption} onChange={props.sizePriceHandle}>
               <option >Select</option>  */}
            {props.selectedOption ? props.selectedOption.map((rowtow, index) => (
                // console.log(rowtow.id,'row.iamgegellery'),
                // <option value="foo">Foo</option>
                // console.log({props})
                    // <option value={rowtow.saleprice} onClick={()=> props.changeSizeWithQty(rowtow.qty)}>{rowtow.size}</option>
                //     <>
                    
                    <p value={rowtow.saleprice} key={rowtow.id} onClick={()=> props.changeSizeWithQty(rowtow.qty)}>{rowtow.size}</p>
                //    </>
                                 
                
            )) : null}
            {/* </select> */}
        </Fragment>
    )
}

export default CheckSizes;
