import React from 'react'

const TextForm = (props) => {
    return (
        <div>

            <h1>{props.heading}</h1>



          
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary">
                Change To upper Case
            </button>



        </div>
    )
}

export default TextForm