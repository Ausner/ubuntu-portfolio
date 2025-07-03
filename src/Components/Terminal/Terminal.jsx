import './Terminal.css';

function Terminal ({onButtonClick}) {
  return (

<div class="terminal-loader">
  <div class="terminal-header">
    <div class="terminal-title">Status</div>
    <div class="terminal-controls">
      <div class="control close" onClick={onButtonClick}></div>
    </div>
  </div>
  <div class="text">Welcome to my UBUNTU based portfolio! Please close this terminal and navigate through the system!</div>
</div>

  );
}

export default Terminal;