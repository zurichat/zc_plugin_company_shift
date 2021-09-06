import SwapRequest from '../../components/swapRequest/SwapRequest';
import MainSidebar from '../../components/sidebar/Sidebar';
import Pheader from '../../components/primary/pheader';


import './ShiftStyle.css';

function ShiftSwapRequest() {
  return (

    <div className="klare-Management-container">


          <MainSidebar/>

          <div>
          <Pheader />
          <SwapRequest/>
          </div>


    </div>
  );
}

export default ShiftSwapRequest; 