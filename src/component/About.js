import React from 'react'

export default function About() {

    return (
        <div className="container">
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Me
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is created by Vaibhav Pandey.</strong>
                    <p>This WebPage is basically created for editing on text online.This may help many user to edit text online.This WebPage will get update day-by-day to add more features.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Contact Details
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Contact Info:</strong>
                    <p>Email-Id: pandey.vaibhav3110@gmail.com</p>
                    <p>Contact Num: 9555788790</p>
                    <p>Region: India</p>
                </div>
                </div>
            </div>
            </div>      
        </div>
  )
}
