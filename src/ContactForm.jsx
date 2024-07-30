import "./ContactForm.css"

function ContactForm () {
  return(
    <>
      <div id="contact-form" className="contact-form">
        <h1>Contact Form</h1>
        <div className="contact-form__container">

            <form className="contact-form__info">

                <legend>Do you have any questions or suggestions? Use the contact form!</legend>
                  <div className="contact-form__personal-info">
                    <label>First name<input type="text"/></label>
                    <label>Last name<input type="text"/></label>

                  </div>
                <div className="contact-form__email">
                  <label>E-mail<input type="email"/></label>
                </div>
                <div className="contact-form__message">
                  <label>Message</label><textarea placeholder="Your message"/>
                </div>
                <div className="contact-form__submit-button">
                  <button className="submit-button" type="submit">Submit contact form</button>

                </div>

        </form>

      </div>
      </div>
    </>
  )
}

export default ContactForm