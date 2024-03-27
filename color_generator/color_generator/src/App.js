import {useState} from 'react'
import './App.css';

function App() {
  const [colortype,setColorType]=useState("rgb")
  const [color,setColor]=useState("black")
  
  const handleColorChange = (current_type) => {
    if (current_type === "rgb") {
      const cur_color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
      setColor(cur_color);
      setColorType("RGB");
    } else if (current_type === "hex") {
      const random_hex = Math.floor(Math.random() * 0xffffff).toString(16);
      const cur_color = "#" + random_hex.padStart(6, '0');
      setColor(cur_color);
      setColorType("HEX");
    }
  }

//   const handleColorChange = (e) => {
//   const current_type = e.target.value;
//   if (current_type === "rgb") {
//     const cur_color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
//to be repeated part
//     setColor(cur_color);
//     setColorType("RGB");
//   } else if (current_type === "hex") {
//     const random_hex = Math.floor(Math.random() * 0xffffff).toString(16);
//     const cur_color = "#" + random_hex.padStart(6, '0');
//     setColor(cur_color);
//     setColorType("HEX");
//   }
// }

  

  return (
    <div className="App" style={{backgroundColor:color}}>
     <button onClick={() => handleColorChange('rgb')}>generate rgb color</button>
     <button onClick={() => handleColorChange('hex')}>generate hex color</button>
     <div>
       {color}
     </div>
    </div>
  );

}

export default App;

//we have toget the div container and change it's style