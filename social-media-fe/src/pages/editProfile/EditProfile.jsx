import "../editProfile/EditProfile.css"
import React from "react";
function editProfile(){

    const handleSubmit = (event) => {
        event.preventDefault();

    return (
        <>
        <form
          onSubmit={handleSubmit}
          className="edit-form"
          data-testid="editForm"
        >
          <section className="edit-container">
            <div className="close-container">
                X
              <button type="submit" className="close">
                SAVE
              </button>
            </div>
            <div className="edit-profile"> Edit Profile </div>
            <div className="input-container">
              <input
                type="text"
                    
                label="Display name"
              />
              <input
                type="text"
                label="Age"
              />
              <input
                inputType="textarea"
                classStyle="input-about"
                label="About"
              />
              <label> Profile Picture </label>
              <section className="input-image-container">
              </section>
              <div className="theme-container">
                <label> Theme </label>
                <input
                  className="theme-color"
                  type="color"
                />
              </div>
            </div>
          </section>
        </form>
        </>
    );
  };
}
  
  export default editProfile ;