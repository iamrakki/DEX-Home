import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Swap from './components/Swap';
import Prep from './components/Prep';
import Earn from './components/Earn';
import Stake from './components/Stake';
import Chart from './components/chart';
import backgroundImage from './components/image/top.png';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='dropdown-container'>
          <Routes>
            <Route path='/' element={<Swap />} />
            <Route path='/prep' element={<Prep />} />
            <Route path='/earn' element={<Earn />} />
            <Route path='/stake' element={<Stake />} />
          </Routes>
        </div>
      </div>

      <div>
        <div className='top'>
        <img src={backgroundImage} alt='BTC-PREP Image'/>
          <h2>BTC-PREP</h2>
          <p>All Market</p>
          <p>24h High: </p>
          <p>24h Low: </p>
          <p>Long OI: </p>
          <p>Short OI: </p>
        </div>
      </div>
      <Chart />
      <div className='form'>
        <div className='button-1'>
          <button>Long</button>
          <button>Short</button>
        </div>

        <div className='button-2'>
          <p className='ph'><em>Dumb Mode</em><em>Degen Mode</em></p>
          <button onclick="showContent('Dumb')">Dumb</button>
          <button onclick="showContent('Degen')">Degen</button>
        </div>
     

      <div className='form-2'>
        
      <img src={backgroundImage} alt='BTC-PREP Image'/> 
      <h2>BTC-PREP </h2> 
        <div className='form-2A'>
        <h3>principle</h3>
        <button className='btn1'>25%</button>
        <button className='btn2'>50%</button>
        <button className='btn3'>100%</button>
        <p>USDT</p>
        </div>
      </div>

      <div className='form-3'>
        <div>
          <strong>Expiration:</strong>
          <button className="form-3-button" value="60s" >60s</button>
          <button className="form-3-button" value="5m" >5m</button>
          <button className="form-3-button" value="10m" >10m</button>
        </div>
        <div>
          <strong>Entry Price:</strong><span className="form-3-options-1"> 43958.3 USD</span>
        </div>
        <div>
          <strong>Profit (Expiry Price {">"} Entry Price):</strong> <span className="form-3-options">70%</span>
        </div>
        <div>
          <strong>Loss (Expiry Price {"<="} Entry Price):</strong> <span className="form-3-options">100%</span>
        </div>
      </div>

      <div>
        <button className='connectionButton-2' >
          Connected Wallet
        </button>
      </div>
      </div>


      
      <div className='bottom'>
        <div className='bottom-1'>
        <h2>Positions</h2>
        <h2>Orders</h2>
        <h2>History</h2>
        </div>
        <div className='bottom-2'>
        <p>Symbol</p>
        <p>Direction</p>
        <p>Entry Time</p>
        <p>Expiry Time</p>
        <p>Initial Margin</p>
        <p>Entry Price</p>
        <p>Expiry Price</p>
        <p>PNL(ROI%)</p>
        </div>
        <div className='bottom-3'>
          <p>Status</p>
          <p>Finish</p>
        </div>
      </div>

    </Router>
  );
}

export default App;