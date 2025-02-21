import './App.css';
import flowers1 from './assets/flowers.jpg';
import flower from './assets/flowerss.png';
import redflower from './assets/redFlowers.jpg';
import yellowflowers from './assets/yellowflowers.jpg';
import { useState } from 'react';

function App() {
  const flowers = [flowers1, flower, redflower, yellowflowers];
  const [currentpic, setCurrentpic] = useState(0);

  const handleNext = () => {
    setCurrentpic((previousImg) => (previousImg + 1) % flowers.length);
  };

  const handlePrevious = () => {
    setCurrentpic((previousImg) => (previousImg - 1 + flowers.length) % flowers.length);
  };

  return (
    <>
      <div className='container'>
        <img src={flowers[currentpic]} alt="image not found" className='imgLarge' style={{ height: '400px', border: 'solid gray 1px' }} />
        
        <div className='image-div'>
          <img src={flowers[(currentpic + 1) % flowers.length]} alt="image not found" className='img' />
          <img src={flowers[(currentpic + 2) % flowers.length]} alt="image not found" className='img' />
          <img src={flowers[(currentpic + 3) % flowers.length]} alt="image not found" className='img' />
        </div>

        <div className='btn-div'>
          <button className='btn' onClick={handlePrevious}>Previous</button>
          <button className='btn' onClick={handleNext}>Next</button>
          <button className='btn' style={ {backgroundColor: 'red' }}  onMouseEnter={(e) => e.target.style.backgroundColor = 'darkred'}  onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
