import './Info.css';

function Info({onButtonClick}) {
  return (

    <div class="card">
      <div class="mac-header">
        <span class="red icon"  onClick={onButtonClick}></span>
      </div>


      <img src='/me.jpg' width={200} height={200} class="img"/>
      <span class="card-title">Ausner Miranda</span>
      <br/>

      <span class="card-title">FullStack Software Engineer</span>
      <p class="card-description">
        I am a Software Engineer with a strong foundation in
software development and design principles. I am
passionate about continuous learning and staying current
with the latest technologies!
      </p>

    </div>


  );
}

export default Info;