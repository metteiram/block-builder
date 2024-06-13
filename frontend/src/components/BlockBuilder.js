import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import './BlockBuilder.css'; // Import the CSS file

const BlockBuilder = () => {
  const [blocks, setBlocks] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        axios.get('/api/blocks')
          .then(response => {
            setBlocks(prevBlocks => [...prevBlocks, `block ${prevBlocks.length + 1}`]);
          })
          .catch(error => {
            console.error('There was an error fetching the blocks!', error);
          });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    axios.post('/api/reset')
      .then(response => {
        console.log(response.data);
        setBlocks([]); // Clear blocks after successful reset
      })
      .catch(error => {
        console.error('There was an error resetting the blocks!', error);
      });
  };

  return (
    <div className="block-builder">
      <h1>Block Builder</h1>
      <div className="instructions">
        <p>Blocks start out empty.</p>
        <p>1 new block is added to the screen every one second.</p>
        <p>Nothing happens until "Start" is clicked.</p>
        <p>Clicking "Stop" will prevent any new blocks from being added.</p>
        <p>Clicking "Start" again will resume adding new blocks.</p>
        <p>Clicking "Reset" will set the number of blocks back to 0.</p>
      </div>
      <div className="block-container">
        {blocks.map((block, index) => (
          <div key={index} className="block">{index + 1}</div>
        ))}
      </div>
      <div className="controls">
        <button className="start" onClick={start}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default BlockBuilder;
