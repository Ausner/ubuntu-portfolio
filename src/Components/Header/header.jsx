 import './Header.css';
 import React, { useEffect, useState } from 'react'

function Header() {

function getFormattedDate() {
  const date = new Date();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month} ${day} ${hours}:${minutes}`;
}

  const [formattedDate, setFormattedDate] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(getFormattedDate());
    }, 1000); // actualiza cada segundo, puedes poner 60000 para cada minuto

    return () => clearInterval(interval); // limpiar el intervalo al desmontar
  }, []);

  return (
    <div className="header-container">
        <h1>{getFormattedDate()}</h1>
   </div>
  );
}

export default Header;