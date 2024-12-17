import React, { memo, useEffect } from 'react';
import Layout from '../utility/Layout';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Zekate, Banking, Investment } from '../../jsonData/Data';

export default memo( function Studyspot() {
  const navigate = useNavigate();
  const content = useLocation().pathname.split('/').filter(Boolean).pop();

  // useEffect(() => {
  //   const spot = localStorage.getItem("study-spot");
    
  //   if(spot !== content){
  //     localStorage.setItem("study-spot", content)
  //   }
  //   if (spot !== 'study-spot') {
  //     navigate(`/study-spot/${spot}`);
  //   }

  //   return () => {
  //     if (content !== 'study-spot') {
  //       localStorage.setItem("study-spot", content); 
  //     }
  //   };
  // }, [navigate, content])
  return (
    <Layout content={"Study Spot"} lesswidth="true">
      <div className="flex w-[103%] h-full gap-3 -ml-3 -mt-3">
        {/* Left Sidebar */}
        <div className="flex-[5] h-[105%] flex flex-col bg py-4 px-6 text-white dark:bg-cust-sinan">
          <h2 className={`text-xl font-semibold`}>Halal Finance</h2>
          <Link to="/study-spot/islamic-banking">
            <h1 className={`capitalize font-normal m-0 shadow mt-5 text-xl ${content === 'islamic-banking' ? 'text-cust-blue' : 'text-black dark:text-white'}`}>1. islamic banking</h1>
          </Link>
          <Link t0o="/study-spot/halal-finance" onDoubleClick={()=>navigate('/study-spot/halal-finance')} >
            <h1 className={`capitalize font-normal m-0 shadow mt-5 text-xl ${content === 'halal-finance' ? 'text-cust-blue' : 'text-black dark:text-white'}`}>2. halal finance</h1>
          </Link>
          <Link to="/study-spot/zakat">
            <h1 className={`capitalize font-normal m-0 shadow mt-5 text-xl ${content === 'zakat' ? 'text-cust-blue' : 'text-black dark:text-white'}`}>3. zakat</h1>
          </Link>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-[12] study flex flex-col gap-3 h-[105%] text-black dark:text-white p-5 bg overflow-y-auto scroll dark:bg-cust-black">
          <div className="md:w-[570px] text-white mx-auto h-[100px] bg-cust-blue/95 rounded-xl p-5">
            <h1 className="text-2xl font-medium my-0">Education Port</h1>
            <p className="font-extralight text-sm capitalize">
              Get help to distribute your financial property <br />
              with our suggested allocations
            </p>
          </div>

          {/* Routing Content */}
          <Routes>
            <Route path="/islamic-banking" element={<Banking />} />
            <Route path="/halal-finance" element={<Investment />} />
            <Route path="/zakat" element={<Zekate />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
})
