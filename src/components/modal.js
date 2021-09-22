import React from 'react';
import './modal.css';

export const Modal = ({ show, close }) => {
    return (

        <div className="'modal-wrappers' w-4/5 max-w-screen-md mx-auto my-auto md:w-1/4"
        style={{
            opacity: show ? '1' : '0'
        }}>
            <div className="modal-header hover:-translate-y-0.5 transform transition bg-green-700 text-white p-2 mt-8  flex justify-between">
                <p className="font-sans text-xl font-bold">Notifications</p>
                <span onClick={close} className="close-modal-btn text-2xl cursor-pointer">x</span>
            </div>
            <div className="'modal-content' px-6 py-8 bg-gray-400">
                <div className="pb-3 p-2 h-30 rounded-lg border border-green-400 bg-green-500 text-white divide-y-2 divide-solid divide-green-400 hover:bg-green-900 hover:-translate-y-0.5 transform transition">
                    <h2 className="font-bold text-xl pb-2">On Duty!</h2>
                     <p class="pt-2">This is to notify you about your shift resumption today.</p>
                </div>
                <div className="mt-6 pb-3 p-2 rounded-lg border border-red-400 bg-red-500 text-white divide-y-2 divide-solid divide-red-400 hover:bg-red-900 hover:-translate-y-0.5 transform transition">
                <h2 className="font-bold text-xl pb-2">Off Duty!</h2>
                  <p class="pt-2">This is to notify you about your end shift resumption today.</p>

                </div>
                <div className="'modal-footer' mt-6 text-center flex justify-end">
                    <button onClick={close} className="btn-cancel  px-5 py-1 rounded-lg shadow-lg bg-red-400 hover:bg-red-800 hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-400 text-white">Close</button>
                </div>
            </div>
        </div>
    )
}