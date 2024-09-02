import React from 'react'

function Contact() {
  return (
    <>
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form >
                <div>
                    <label>UserName</label>
                    <input type="text " placeholder='Name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Email'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text " placeholder='Tell us your query..'/>
                </div>
                <button type='Submit'>Submit</button>
            </form>
        </main>
    </div>
    </>
  )
}

export default Contact