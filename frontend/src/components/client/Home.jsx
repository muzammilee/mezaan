import React, { memo, Suspense, useEffect } from 'react'
import masjid from "../../images/masjid.png"
import { Link } from 'react-router-dom'
import Switcher from '../utility/ToggleMode'
import axios from 'axios'
import logo from "../../svgs/logo.svg"



export default memo( function Home() {
  let user = localStorage.getItem("user")
  console.log(user);
  
  // axios.get(")
  useEffect(() => {
    // Make a GET request using axios
    axios.post('http://localhost:5000/user',{username:user})
      .then((response) => {
        // Handle success
        console.log(response.data.name)   // Set loading to false once data is fetched
      })
      .catch((error) => {
        // Handle error
        console.log(error.message)       // Set loading to false even on error
      });
  }, [])

  return (
    <>
    {/* <Hi /> */}
    {/* <i className="fa-solid fa-moon"></i> */}
    
      <div className='w-full overflow-x-hidden h-svh relative text-white font-sans' style={{ background: `url(${masjid})`, backgroundSize: 1280, backgroundPositionY: "80px", backgroundRepeat: "no-repeat" }}>

        {/* NAV BAR  */}
        <nav className="h-20 w-full bg-cust-blue/95 px-10 flex items-center md:gap-5">
          <img src={logo} className='h-14' alt="" />
          <h1>meezan</h1>
          <div className='ml-auto flex gap-4 '><Switcher size="text-2xl" /><img src="" alt="" className="rounded-full w-[50px] h-[50PX] bg-white" /></div>
        </nav>
     

        {/* SMALL DISCRIPTION */}
        <div className="absolute hi -translate-y-1/2 top-1/2 left-10 md:left-[100px] w-[400px] sm:w-[500px] md:w-[750px]">
          <h1 className='text-3xl sm:text-4xl md:text-6xl max-sm:mb-3 capitalize'>keep your life purified</h1>
          <p className='max-sm:text-sm overflow-hidden'>A Muslim should keep his life purified so that he doesn't know when death will come for him. The purification should start from finance, it's the base. Therefore he should be Conscious of Islamic finance. This website will help to study Islamic finance and experience services related to Islamic finance.</p>
          <button className='rounded-xl md:mt-3 bg-cust-blue/95 px-4 py-2 flex justify-center items-center w-auto mt-3 hover:opacity-85'>Get Into The Workspace</button>
        </div>

      </div>

      {/* SECOND SECTION  */}
      <div className="w-full px-4 text-white pb-3 bg-cust-cream/90 dark:bg-black min-h-[130vh] box-border"><div className="w-full bg-white dark:bg-cust-black rounded-b-2xl h-full py-14 flex flex-col items-center justify-center overflow-x-hidden">
        <div>

          {/* GET WITH US */}
          <h1 className="sm:max-md:ml-9 md:text-4xl text-black dark:text-white font-bold">Explore</h1>
          <div className="flex flex-wrap items-center  text-black dark:text-white  overflow-hidden0 justify-center gap-4 md:gap-7 h-auto w-[400px] sm:w-[740px] md:w-[840px] ">

            {/* LIBRARY  */}
            <Suspense><Link to="/Articles" className="group rounded-2xl border p-2 border-black gap-0 flex flex-col justify- items-center h-[220px] w-[400px] sm:max-md:w-[330px]">
              <i className="rounded-full h-[120px] w-[120px] text-6xl bg-cust-cream/80 dark:bg-cust-sinan group-hover:bg-cust-blue/70 text-cust-blue/70 group-hover:text-white fa-solid fa-books flexa "></i>
              <h4 className="font-medium text-xl mt-2">Resources</h4>
              <p className="text-cust-blue font-medium text-xl mt-2">Know More</p>
            </Link>
            </Suspense>

            {/* FINANCIAL PLANNER  */}
            <Suspense><Link to="/financial-planner" className="group rounded-2xl border p-2 border-black gap-0 flex flex-col justify- items-center h-[220px] w-[400px] sm:max-md:w-[330px]">
              <i className="rounded-full h-[120px] w-[120px] text-6xl  bg-cust-cream/80 dark:bg-cust-sinan group-hover:bg-cust-blue/70 text-cust-blue/70 group-hover:text-white fa-solid fa-calendar flexa"></i>
              <h4 className="font-medium text-xl capitalize mt-2">Financial Planner</h4>
              <p className="text-cust-blue font-medium text-xl mt-2">Know More</p>
            </Link></Suspense>

            {/* STUDY SPOT  */}
            <Suspense><Link to="/study-spot" className="group rounded-2xl border p-2 border-black gap-0 flex flex-col justify- items-center h-[220px] w-[400px] sm:max-md:w-[330px]">
              <i className="rounded-full h-[120px] w-[120px] text-6xl fa-solid  bg-cust-cream/80 dark:bg-cust-sinan group-hover:bg-cust-blue/70 text-cust-blue/70 group-hover:text-white fa-graduation-cap flexa"></i>
              <h4 className="font-medium text-xl mt-2">Study Spot</h4>
              <p className="text-cust-blue font-medium text-xl mt-2">Know More</p>
            </Link></Suspense>

            {/* EMI Calculator  */}
            <Suspense><Link to="/EMI-calculator" className="group rounded-2xl border p-2 border-black gap-0 flex flex-col justify- items-center h-[220px] w-[400px] sm:max-md:w-[330px]">
              <i className="rounded-full h-[120px] w-[120px] text-6xl  bg-cust-cream/80 dark:bg-cust-sinan group-hover:bg-cust-blue/70 text-cust-blue/70 group-hover:text-white fa-solid fa-calculator flexa"></i>
              <h4 className="font-medium text-xl mt-2">Murabaha Emi Calculator</h4>
              <p className="text-cust-blue font-medium text-xl mt-2">Know More</p>
            </Link></Suspense>

            {/* Community Chat Box */}

            <Suspense><Link to="/chat-with-mentor" className="group rounded-2xl border myElement border-black flex items-center h-[220px] justify-center w-[400px] md:w-[830px] sm:max-md:w-[690px]">
              <i className="rounded-full h-[120px] w-[120px] text-6xl  bg-cust-cream/80 dark:bg-cust-sinan group-hover:bg-cust-blue/70 text-cust-blue/70 group-hover:text-white mr-10 fa-solid fa-message-dots flexa"></i>
              <div ><h4 className="font-medium text-2xl mt-2"><span>Community</span>  Chat Box</h4>
                <p className="text-cust-blue font-medium text-xl mt-3 text-center">Know More</p>

              </div></Link></Suspense>
            {/* <div className="bg-blue-500 h-[200px] w-[350px] sm:max-md:w-[300px]">1</div> */}
          </div>
        </div></div>
      </div>

      {/* footer  */}
      <div className="max-h-svh px-20 py-14 w-full bg-cust-blue/70 text-white">
      meezan <br /> shamsul huda islamic academy,kuttikkattor,<br /> kuttikkattor (po),<br />calicut dist. <br /> pin:673008,kerala,india
      </div>
    </>
  )
})
// https://www.figma.com/design/kubO503QNGRlcZxLJXskkp/halal-finance?node-id=90-12&node-type=frame