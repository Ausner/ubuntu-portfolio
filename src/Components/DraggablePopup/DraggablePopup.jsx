import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './DraggablePopup.css';
import Terminal from '../Terminal/Terminal';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Message from '../Message/Message';
import Files from '../Files/Files';
import Contact from '../Contact/Contact';
import About from '../About/About';
import 'animate.css';
import Repos from '../Repos/Repos';
import Configuration from '../Stack/Stack';
import Info from '../Info/Info';
import Stack from '../Stack/Stack';

const DraggablePopup = ({ iconClicked, onClose }) => {
  const nodeRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [bounds, setBounds] = useState({ top: 0, left: 0, right: 0, bottom: 0 });
  const modalWidth = 700;
  const modalHeight = 600;

  useEffect(() => {
    const updateBounds = () => {
      const width = 300; // Ancho estimado de la popup
      const height = isMinimized ? 40 : 200; // Altura estimada
      setBounds({
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - height
      });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [isMinimized]);



  const toggleMinimize = () => setIsMinimized((prev) => !prev);

  return (
    <>
     {iconClicked === 'IdNIT' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }} className="animate__animated animate__backOutLeft">
        <div ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Terminal onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}

     {iconClicked === 'FILES' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }} className="animate__animated animate__backOutLeft">
        <div className="popup" ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Resume onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}

           {iconClicked === 'CONTACT' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }}>
        <div className="popup" ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Message onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}

           {iconClicked === 'ABOUT' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }}>
        <div className="popup" ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Info onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}


           {iconClicked === 'PROJECTS' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }}>
        <div className="popup" ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Repos onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}


           {iconClicked === 'SKILLS' && (
      <Draggable handle=".popup-drag" nodeRef={nodeRef} bounds={bounds} defaultPosition={{
        x: (window.innerWidth - modalWidth) / 2,
        y: (window.innerHeight - modalHeight) / 2,
      }}>
        <div className="popup" ref={nodeRef}>
          <div className="popup-drag" ref={nodeRef}>

            <Stack onButtonClick={onClose}/>
          </div>
        </div>
      </Draggable>)}
    </>

  );
};

export default DraggablePopup;
