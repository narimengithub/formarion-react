import React from 'react'
import ProfileImege from "../../profileImage.jpg"


const ProfilePhoto = () => {
  return (
    <div className='background'>
          <div className='container-image'>
        <img src={ProfileImege}
        className="image" 
        />
    </div>
    </div>

  )
}

export default ProfilePhoto