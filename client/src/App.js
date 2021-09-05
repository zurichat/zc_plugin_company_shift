//import logo from './assets/company_shift_logo.png';
//import company from './assets/company_shift.png';

import ManagementHome from './pages/shift_management';

import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header' style={{ display: 'none' }}> 
        <div className='cs-left split'>
          <div className='cs-logo'>
            <img src={logo} className='cs-logo_img' alt='Employee Shift Logo' />
            <h3 className='cs-name'>ZURI</h3>
          </div>
          <div>
            <h2 className='cs-head'>Shift Management simplified - Task 18</h2>

            <p className='cs-built'>Bulit by team curies</p>

            <button className='cs-button'>Get started</button>
          </div>
        </div>
        <div className='cs-right split'>
          <img src={company} className='cs-company_img' alt='Employee Shift' />
        </div>

      </header>*/}
      <ManagementHome />
    </div>
  );
}

export default App;
