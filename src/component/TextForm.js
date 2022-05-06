import React,{useState} from 'react'




export default function TextForm(props) {
    const HandleCopy=()=>{
        var text=document.getElementById("MyText");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
    const HandleClick=()=>{
        setText(text.toUpperCase());
    }
      
    const ClickHandle=(e)=>{
        setText(e.target.value);
    }
    const ClickClear=(e)=>{
        let nText=""
        setText(nText);
    }
    const HandleLoClick=()=>{
        setText(text.toLowerCase());
    }
    const HandleSpace=()=>{
        let nText=text.split(/[ ]+/);
        setText(nText.join(" "))
    } 
    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1 className="mb=2">{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={ClickHandle} id="MyText" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ClickClear}>Clear</button> 
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleClick}>UpperCase</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleLoClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleSpace}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleCopy}>Copy</button>
        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words      {text.length} character     {text.split(" ").length-1} spaces</p>
            <p>{0.008*(text.split(" ").filter((ele)=>{return ele.length!==0}).length)} min to Read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
  )
}