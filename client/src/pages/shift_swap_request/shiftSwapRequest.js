import SwapRequest from '../../components/swapRequest/SwapRequest';
import Main from '../../components/main/main';

import './ShiftStyle.css';

function ShiftSwapRequest() {
  return (
    <div className='Management-container'>
      {/* <MainSidebar></MainSidebar> */}
      <div>
        <Main></Main>
        <SwapRequest />
      </div>
    </div>
  );
}

export default ShiftSwapRequest;
