import React from "react"

const Contact = ({username,contact_email})=>{

    return (
        <>
          <div className="border border-primary pt-3">
            <img style={{width:"50px", height:"50px"}} className="rounded-full img-fluid float-start mr-5" src="https://thumbs.dreamstime.com/z/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg?w=768" />
            <div className="d-inline text-center">
                <h5>{username}</h5>
                <p>{contact_email}</p>
            </div>  
        </div>
        </>
    );
}

export default Contact