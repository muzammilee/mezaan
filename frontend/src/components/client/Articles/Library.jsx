import React, { memo, Suspense, useEffect, useState } from 'react';
import Layout from '../../utility/Layout';
import { Link } from 'react-router-dom';



function Articles({ image, head, para,pdf }) {

  const openPdfInNewTab = () => {
    window.open(pdf, '_blank'); 
  };
  // useEffect(()=>{

  // })
  return (
    <Suspense fallback={
      <div className='bg-cust-cream/70 rounded-xl h-44 gap-2 flex flex-col w-64 mx-auto p-2'>
        <img alt="hi" className="flex-1 w-full min-h-18 bg-cust-cream border-none rounded-2xl" />
        <div className="w-full h-9 text-sm capitalize overflow-hidden bg-cust-cream"></div>
        <div className="w-full h-5 text-sm text-gray-500 bg-cust-cream uppercase overflow-hidden"></div>
      </div>
    }>
      <div className='hover:cursor-pointer group' onClick={openPdfInNewTab}>
        <div className='bg-cust-cream/70 dark:bg-cust-sinan overflow-hidden rounded-xl h-72 md:h-44 gap-2 flex flex-col md:w-64 mx-auto p-4'>
          <h3 style={{ background: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="w-full p-2  group-hover:scale-105 text-white font-medium flex-1 h-16 rounded-xl relative text-xs max-md:text-xl capitalize overflow-hidden">
            <span className="absolute bottom-0">{head}</span>
          </h3>
          <p className="w-full h-5 float-end text-sm text-gray-500 capitalize overflow-hidden">{para}</p>
        </div>
      </div>
    </Suspense>
    
  );
}


export default memo(function Library({data,investment}) {
  
  let [ paperOrFinance, setPaperORFinance] = useState(true)
return (
    <Layout content="Library" 
    additional={<div className='sm:max-md:flex'>
    {/* <h3 className="text-2xl font-medium mb-2 relative box-content">Definitions</h3> */}
    {/* <Definitions contents={difinitions} /> */}
    <img src="/svg/reading.svg" alt="" />
    <div classNme='sm:max-md:p-9'><h3 className='mt-5 text-xl capitalize'>read and gain</h3>
    <p className='text-xs'>Life is behind curiosity. Big research starts from lazy reading and grows to PhD-level reading. Age and place are not barriers for stopping reading. read and make your life more meaningful.</p>
    </div></div>}
    >
      <div className="md:w-[600px] relative text-white mx-auto h-[100px] bg-cust-blue/80 rounded-xl p-5">
        <h1 className="text-2xl font-medium my-0">Resource Library</h1>
        <p className='font-extralight text-sm capitalize'>Get help to distribute your financial property <br /> with our suggested allocations</p>
      </div>
      <div className="md:w-1/3 items-end mt-2 justify-between mx-auto flex"><span className={`cursor-pointer ${paperOrFinance ? 'text-cust-blue underline':'text-black dark:text-white'}`} onClick={()=>setPaperORFinance(true)}>Academic Papers</span><span className={`cursor-pointer ${!paperOrFinance ? 'text-cust-blue underline':'text-black dark:text-white'}`} onClick={()=>setPaperORFinance(false)}>Halal Investment</span></div>
      {paperOrFinance ? (<div className="grid max-md:h-auto md:w-[90%] overflow-auto md:h-2/3 scroll scroll-m-2 w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center mx-auto mt-16 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 top-1/2 left-1/2">
        {data.map((item, index) => (
          <Articles key={index} para={item.author} head={item.heading} image={item.image} pdf={item.pdf}/>
        ))}
      </div>):
      <div className="flex flex-col max-w-[90%] md:w-[500px] md:h-[68%] scroll max-md:h-auto overflow-auto gap-2 mx-auto mt-6">
      {investment.map((item, index) => {
        return (
          <div key={index} className="px-6 rounded-3xl text-black dark:text-white py-4 min-h-[45px] capitalize flex items-center justify-between bg-cust-cream/70 dark:bg-cust-sinan">
            <span>{index + 1}.</span>
            <h2>{item.title}</h2>
            <a href={item.link} className='text-white bg-cust-blue/90 text-sm px-4 py-1 rounded-3xl'>visit</a>
          </div>
        );
      })}
    </div>}
    </Layout>
  );
})
