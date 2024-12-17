import React, { useEffect } from 'react'
import Layout from '../utility/Layout';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../utility/style.css"



export default function ChatBox() {

  return (
    <Layout content="Chat" additional={""} lesswidth="true">
        <div className="flex w-[103%] h-full gap-3 -ml-3 -mt-3">
            {/* Left */}
            <div className="flex-[5] h-[105%] b flex">
                <div className="w-full h-[180px] bg py-4 px-6 dark:bg-cust-sinan">
                <span className='text-base font-bold text-semibold'>Chat name</span>
                <div className="relative w-full mt-4"><input type="text" className='w-full outline-none border-none rounded-xl bg-cust-cream/80 py-2 text-center px-3 text-[8px]' placeholder='Search Members' /><i className="absolute nadu text-xs top-1/2 text-black/60 right-1 fa-regular fa-magnifying-glass"></i></div>
                <h5 className="text-black/50 text-[10px] mt-1">Mentor</h5>
                <div className='flex items-center mt-4'><img src="" alt="" className="h-10 w-10 rounded-[50%] border-none bg-black" />
                <div className="ml-2 flex flex-col justify-between h-8 leading-[10px]"><h1 className='text-xs m-0'>name of mentor</h1><p className='text-xs leading-[8px]'>online</p></div></div>
            </div></div>
            {/* Right */}
            <div className="flex-[12] h-[105%] bg p-2 dark:bg-cust-black">
                hi
            </div>
        </div>
    </Layout>
)
}
