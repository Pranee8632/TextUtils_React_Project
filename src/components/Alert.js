import React from "react";

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //initially alert is null
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
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
