import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleMode from "./ToggleMode"
// import hi from "./new.js"
import "./style.css"
import Swal from 'sweetalert2'

export default function Layout({ content, children, additional, lesswidth }) {

  let [togglNav, setToggleNav] = useState(false)

  const contentList = [
    { to: "/EMI-calculator", content: "Calculator", iconClass: "fa-calculator", title: "Calculator" },
    { to: "Library", content: "Library", iconClass: "fa-books", title: "Resources" },
    { to: "/financial-planner", content: "Calendar", iconClass: "fa-calendar-lines", title: "Financial Planner" },
    { to: "/chat-with-mentor", content: "Chat", iconClass: "fa-graduation-cap", title: "Community Chats" },
    { to: "/study-spot", content: "Study Spot", iconClass: "fa-graduation-cap", title: "Education Port" },
  ],
    filter = contentList.filter((item) => item.content === content),
    navItems = [
      { to: "/", iconClass: "fa-house-chimney", title: "Home" },
      { to: "/Articles", iconClass: "fa-books", title: "Library" },
      { to: "/financial-planner", iconClass: "fa-calendar-lines", title: "Calendar" },
      { to: "/chat-with-mentor", iconClass: "fa-message-dots", title: "Chat" },
      { to: "/EMI-calculator", iconClass: "fa-calculator", title: "Calculator" },
      { to: "/study-spot", iconClass: "fa-graduation-cap", title: "Study Spot" },
    ];

  return (
    <div className='flex bg-cust-cream/95 dark:bg-black md:h-svh h-[3] md:flex-row flex-col gap-2 p-2 font-serif box-border  grid-container'>
      <button className='absolute left-8 top-6 z-10 md:hidden' onClick={() => setToggleNav((c) => !c)}><i className="fa-solid text-3xl fa-grip-dots"></i></button>
      <div id='' className={`md:bg-white dark:bg-cust-black md:flex-[2] rounded-3xl max-md:bg-transparent flexo justify-center z-[1]`}>
        <div className={`transition-transform max-md:bg-white/95  max-md:dark:bg-cust-black max-md:shadow flexo fixed max-md:-left-1 rounded-3xl -translate-y-1/2 top-1/2 gap-3 z-[1] p-3 duration-[0.7s] ${togglNav ? "max-md:-translate-x-0" : "max-md:-translate-x-[350px]"}`}>
          <ToggleMode />
          {/* <Toggle /> */}
          {navItems.map((item, key) => <Link to={item.to}><i className={`nav-item fa-light ${item.iconClass} ${content === item.title ? "text-white dark:text-cust-sinan bg-cust-blue/80" : "text-cust-blue bg-cust-cream/70 dark:bg-cust-sinan"} hover:text-white hover:bg-cust-blue/80 `}></i></Link>)}
          </div></div>
      <div className={`p-4 relative flex-[30] overflow- min-h-[97vh]  ${!lesswidth && "bg dark:bg-cust-black"}`}>
        {children}
      </div>
      <div className={`flex flex-col gap-2 test flex-[8] ${lesswidth ? "w-[100px]" : ""}`}>
        <div className={`bg flexo max-md:scale-0 p-3 max-md:hidden dark:bg-cust-black ${!lesswidth && "bg"}`} >
          {filter.length > 0 && (
            <>
              <i
                className={`rounded-full h-[90px] flexa -mb-3 text-5xl w-[90px] fa-light ${filter[0].iconClass} text-white bg-cust-blue/80`}
              ></i>
              <h1 style={{ fontSize: "inherit" }} className="font-medium text-2xl">
                {filter[0].title}
              </h1>
            </>
          )}
        </div>
        <div className="scroll bg p-4 flex-1 max-md:-mt-[210px] md:overflow-auto md:max-h-[69vh] dark:bg-cust-sinan">
          {additional}
        </div>
      </div>
    </div>
  )
}

