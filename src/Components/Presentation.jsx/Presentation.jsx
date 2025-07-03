import './Presentation.css';
import Navbar from '../Navbar/Navbar';
import DraggablePopup from '../DraggablePopup/DraggablePopup';
import { useEffect, useState } from 'react';

function Presentation({iconActive, onClick}) {
    const [iconClicked, setIconClicked] = useState("");
    console.log("pres> ", iconClicked)

    const handleClose = () => {
      console.log("¡El botón en C2 fue presionado!");
      setIconClicked("");

    };

  return (
    <>
        <div class="screen" onClick={onclick}>
            <Navbar iconClicked={iconClicked} setIconClicked={setIconClicked}></Navbar>
            <div class="desktop">
              <DraggablePopup iconClicked={iconClicked} onClose={handleClose}></DraggablePopup>
            </div>
        </div>

    </>
  );
}

export default Presentation;