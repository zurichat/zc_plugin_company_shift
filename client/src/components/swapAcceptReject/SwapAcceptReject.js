import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";


const SwapAcceptReject = () => {
    return ( 
        <div className="bg-gray-600 bg-opacity-25 z-0 flex flex-col justify-center items-center w-screen  h-screen relative">
            
            <div className="bg-white m-10 py-5 px-14 lg:py-8 xl:px-10 md:px-14 relative pb-6">
                <Link to="/dashboard" className="px-1 py-1 font-light absolute top-5 right-4 lg:right-6 lg:top-8">
                    <AiIcons.AiOutlineClose />
                </Link>                  
                <h2 className=" mb-4 text-lg font-semibold lg:text-xl xl:text-2xl">Swap Request </h2>
                <p className="mb-4 text-sm ">Fill this form to request for your shift to be swapped with that of another employee</p>
                
                <div className="mb-3 flex justify-center flex-col relative">
                    
                    <label className="font-semibold text-sm mb-2">Select a shift</label>
                    <AiIcons.AiOutlineCalendar
                        className="absolute top-10 transform translate-y-1 left-2"
                    />
                    <select  className="text-sm py-3 pl-8 border rounded border-gray-400  focus:border-green-600 focus:ring-green-600 outline-none w-full">
                        <option>September 18, 2021</option>
                    </select>
                </div>

                
                <div className="mb-3 flex flex-col">
                    <label for="employee" className="font-semibold text-sm mb-2">Select Employee who you wish to swap with</label>
                    <select name="" id="" className="text-sm py-3  border border-gray-400 focus:border-green-600 focus:ring-green-600 w-full outline-none rounded">
                        <option value="" className="">Select</option> 
                        <option value="" className="">Olakunle Fasasi</option>
                        <option value="" className="">Eniola Badmus</option>
                        <option value="" className="">Simon Peters</option>
                    </select>
                </div>

                <div className="mb-3 flex flex-col">
                    <label className="font-semibold text-sm mb-2 ">Select a shift</label>
                    <select  className="text-sm py-3 border border-gray-400 focus:border-green-600 focus:ring-green-600 w-full outline-none rounded">
                        <option>September 18, 2021</option>
                    </select>
                </div>
                <div className="">
                    <p className="font-semibold text-sm mb-2 ">Description <span className="font-medium text-gray-600">(optional)</span></p>
                    <input 
                        className="text-sm py-3 border border-gray-400 focus:border-green-600 focus:ring-green-600  w-full  outline-none rounded"
                        type="text"
                    
                    />
                </div>
                <div className="flex justify-end mt-5">
                    <button className="px-6 xs:px-7 xs:px-5  xs:mr-2 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-2 mr-2 xs:mr-0 bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white  rounded">Reject</button>
                    <button className="px-6 xs:px-7 xs:px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-2 mr-2 bg-green-500 text-white hover:bg-white hover:text-green-500 border hover:border-green-500 rounded text-base">Accept</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default SwapAcceptReject;