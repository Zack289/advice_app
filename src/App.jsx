import React, { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {
  const [advice, setAdvice] = useState(''); // state hook

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice(); // fetch advice on component mount
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
