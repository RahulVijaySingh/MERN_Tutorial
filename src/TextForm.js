import React,{useState} from 'react'

const TextForm = (props) => {
    

    let changeHandling = (event)=>{
        settext(event.target.value);
    }

    let upperChange=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }

    const [text, settext] = useState("Enter the Text");

    return (
        <div>

            <h1>{props.heading}</h1>


            
          
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={changeHandling} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperChange}>
                Change To upper Case
            </button>



        </div>
    )
}

export default TextForm