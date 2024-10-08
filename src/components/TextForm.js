import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const handleClearClick=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!!","success");
  }

  const handleCopyClick=()=>{
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    document.getSelection().removeAllRanges();  //it is used to unmark the text while copying ->remove and observe
    
    props.showAlert("Copied to clipboard","success");
  }

  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    //the above used one is the regExp which is 
    // used to find out the one or more whitespaces and 
    // the split function returns an array 
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!!","success");
  }

  const handleChange=(event)=>{
    setText(event.target.value);
  } //if we wont write event as the parameter then we cant edit the textarea -- see the changes by removing the event

  const[text,setText]=useState("");

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
        {/* container => Bootstrap css */}
          <h1 className='mb-3'>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="myBox" value={text} placeholder='Enter the text:' onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
          </div>
          <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
          <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}> 
      {/* my-3 => Bootstrap lo margin along y-direction */}
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
        {/*filter is used to remove the whitespaces in the array returned by split ,cz even if we not entered anything in the box it is showing as 1 word  */}
        {/* split(" ") returns an array*/}
        {/* time taken to read 125 words is 1 min then for 1 word= 1/125=0.008 min */}

        <p>Time taken to read the text: {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        {/* for 0 words it should be read as the zero minutes */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

      </div>
    </>
  )
}


