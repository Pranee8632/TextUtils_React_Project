import React from "react";

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //initially alert is null

    // cummulative layout shift -> when it is coming the below layout is shifting its position ->this shouldn't happen so we are trying to reduce this kind of changes by fixing it in a div tag with some specific height
    <div style={{height:'50px'}}>  
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg} </div> }
     

      {/* <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
     ></button> */} 
     {/* the above button need to be removed bcz when the user 
     clicks on the wrong symbol the alert is diappeared and is never visible 
     eventhough we clicked the buttons like uppercase and all */}
    </div>
  );
}
