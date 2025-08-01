import './Skills.css';

function Skills ({iconActive, onClick}) {
  return (

        <div class="skills" onClick={onClick}>

<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="65" height="65" viewBox="0 0 28 28"><g fill="none"><path fill="url(#fluentColorCodeBlock280)" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25z"/><path fill="url(#fluentColorCodeBlock281)" d="M12.03 9.22a.75.75 0 0 0-1.06 0l-4.25 4.25a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L8.31 14l3.72-3.72a.75.75 0 0 0 0-1.06m5 0a.75.75 0 1 0-1.06 1.06L19.69 14l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z"/><defs><linearGradient id="fluentColorCodeBlock280" x1="8.364" x2="20.429" y1="3" y2="25" gradientUnits="userSpaceOnUse"><stop offset=".028" stop-color="#E67EEA"/><stop offset=".438" stop-color="#AD64D7"/><stop offset="1" stop-color="#794DC5"/></linearGradient><linearGradient id="fluentColorCodeBlock281" x1="10.056" x2="15.931" y1="9.385" y2="24.59" gradientUnits="userSpaceOnUse"><stop stop-color="#FDFDFD"/><stop offset="1" stop-color="#F9DCFA"/></linearGradient></defs></g></svg>

{iconActive === "SKILLS" && <div className="selected"></div>}
        </div>


  );
}

export default Skills;