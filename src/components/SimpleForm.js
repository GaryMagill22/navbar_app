import React from 'react'
import { useState } from 'react'

const SimpleForm = (props) => {
    const [userInput, setUserInput] = useState("");


    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="form-container" style={{ maxWidth: '700px', margin: "50px" }}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="textInput">Text Input:</label>
                            <input type="text" className="form-control" id="textInput" placeholder="Enter text" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default SimpleForm;