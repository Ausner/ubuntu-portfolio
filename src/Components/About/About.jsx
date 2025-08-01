import './About.css';

function About({iconActive, onClick}) {
  return (

        <div class="about" onClick={onClick}>
<svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z" fill="#2196F3"></path><path d="M469.333333 426.666667h85.333334v234.666666h-85.333334z" fill="#FFFFFF"></path><path d="M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFFFFF"></path></g></svg>
{iconActive === "ABOUT" && <div className="selected"></div>}
        </div>

  );
}

export default About;