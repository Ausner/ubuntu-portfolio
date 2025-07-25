import './Contact.css';

function Contact({iconActive, onClick}) {
    console.log("msg iconActive: ", iconActive)

  return (

        <div class="contact" onClick={onClick}>
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M789.333333 832H234.666667l-128 128V234.666667c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z" fill="#009688"></path><path d="M512 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#FFFFFF"></path><path d="M725.333333 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#FFFFFF"></path><path d="M298.666667 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#FFFFFF"></path></g></svg>
{iconActive === "CONTACT" && <div className="selected"></div>}        </div>

  );
}

export default Contact;