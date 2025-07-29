import { useState } from 'react';
import './App.css';
import Nav from './componets/nav.jsx';
import About from './componets/des.jsx';
import SwiperSlider from './componets/SwiperSlider.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <About />
      <SwiperSlider />
    </>
  );
}

export default App;
