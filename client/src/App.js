//import logo from './assets/company_shift_logo.png';
//import company from './assets/company_shift.png';

import React, { useState } from 'react';
import ManagementHome from "./pages/shift_management";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./chatbot/ActionProvider";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";

import "./App.css";

function App() {
  const [showChatbot, setShowChatbot] = useState(false)
	
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
        <div className="cs-right split">
            <img src={company} className="cs-company_img" alt="Employee Shift"/>
          </div>
			// {/* </header> */}

			{/* <div className='cs-right split'>
          <img src={company} className='cs-company_img' alt='Employee Shift' />
        </div>

      </header>*/}
			<ManagementHome />
      {
       showChatbot && 
       <div className="app-chatbot-container">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
     </div>
      }
      {console.log(showChatbot)}
      
			<button onClick={() => setShowChatbot(!showChatbot)} className='app-chatbot-button'>
				<svg viewBox='0 0 640 512' class='app-chatbot-button-icon'>
					<path d='M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z'></path>
				</svg>
			</button>
		</div>
	);
}

export default App;
