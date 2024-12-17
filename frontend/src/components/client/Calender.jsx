import React, { memo } from 'react'
import Layout from '../utility/Layout';
import { useFormNew } from '../utility';
import image from "../../images/amico.svg"

export default memo(function Calender() {
  let [value, handleChange] = useFormNew({
    amount: 100000,
  }), { amount, } = value

  amount = amount > 10000000 ? 100000 : amount
  const formatCurrency = (amount) => {
    // amount
    return new Intl.NumberFormat("en-IN").format(amount)
  }
  return (
    <Layout content="Calendar"
      additional={<>
        <img src={image} alt="stay with us" />
        <h1 style={{fontSize:"inherit"}} className=' leading-[8px] capitalize'>be planned with us</h1>
        <p className='overflow-hidden h-[24%] text-xs text-black/70 dark:text-white/80'>Being a financial planner is compulsory in our life. Learning to spend is more important than learning to earn. Without a good financial human become tired of money management.</p>
      </>}
    >
      <div className=" md:w-[600px] text-white mx-auto h-[100px] bg-cust-blue/80 rounded-xl p-5">
        <h1 className="text-2xl font-medium my-0">Financial Planner</h1>
        <p className='font-extralight text-sm capitalize'>get help to distribute your financial property <br /> with our suggested allocations</p>
      </div>
      <div className="calc md:w-[600px] mx-auto mt-7">
        <div className='flex-1'>
        <h3 className='flex items-center  dark:text-white mb-7'>Loan amount <span className={`px-2 py-0 h-7 ml-auto inline-flex min-w-20 max-w-28 font-medium ${amount < 5000 ? 'text-rose-500 bg-rose-500/20' : 'text-blue-600 bg-cust-blue/30'}`}>₹<input type="text" onChange={(e) => handleChange(e)} className="bg-transparent outline-none border-none w-full text-right" name="amount" value={amount} /> </span> </h3>
                            <div className="relative -mt-3 text-white h-[3px] bg-slate-300">
                            <input className='absolute top-1/2 outline-none border-none slider appearance-none w-full h-full bg-transparent' max='10000000' min="5000" type="range" name="amount" value={amount} onChange={(e) => handleChange(e)} />
                            <div style={{ width: `${((amount / 10000000) * 100) || 0}%` }} className={`rounded-2xl absolute -translate-y-[2.5px] top-1/2 bg-cust-blue h-[100%] z-[1]`}></div>
                            </div>
                            </div>
      </div>

      <div className="flexo mt-3 dark:text-white font-medium p-3 md:w-[600px] m-auto w-full py-3 gap-3 absolute nadu -translate-x-1/2 top-[65%] left-1/2">
        {/* one  */}
        <div className="bg-cust-cream/70 dark:bg-cust-sinan w-full rounded-2xl border-black flex items-center p-2">
          <i className="rounded-full ml-20 text-6xl text-cust-blue/70 flexa fa-solid fa-family"></i>
          <div className='ml-3'><h4 className="text-lg mt-0">Family Needs: <span className="font-light">60%</span></h4>
            <p className="bg-cust-blue/70 px-3 p-1 rounded-xl text-white text-lg mt-0">Amount: <i className="fa-regular text-sm fa-indian-rupee-sign"></i><input type="text" className='bg-transparent w-24' disabled value={formatCurrency(parseInt(Number(amount) * (60 / 100)))} /></p>
          </div>
        </div>
        {/* two  */}
        {((Number(amount) * (10 / 100)) + (Number(amount) * (10 / 100)) + Number(amount) * (20 / 100) + Number(amount) * (60 / 100)) !== Number(amount) && "hi"}
        <div className="bg-cust-cream/70 dark:bg-cust-sinan w-full rounded-2xl border-black flex items-center p-2">
          <i className="rounded-full ml-20 text-6xl text-cust-blue/70 flexa fa-solid fa-coins fa-  "></i>
          <div className='ml-3'><h4 className="text-lg mt-0">Savings: <span className="font-light">20%</span></h4>
            <p className="bg-cust-blue/70 px-3 p-1 rounded-xl text-white text-lg mt-0">Amount: <i className="fa-regular text-sm fa-indian-rupee-sign"></i><input type="text" className='bg-transparent w-24' disabled value={formatCurrency(parseInt(Number(amount) * (20 / 100)))} /></p>
          </div>
        </div>
        {/* three  */}
        <div className="bg-cust-cream/70 dark:bg-cust-sinan w-full rounded-2xl border-black flex items-center p-2">
          <i className="rounded-full ml-20 text-6xl text-cust-blue/70 flexa fa-solid fa-hand-holding-heart"></i>
          <div className='ml-3'><h4 className="text-lg mt-0">Charity: <span className="font-light">10%</span></h4>
            <p className="bg-cust-blue/70 px-3 p-1 rounded-xl text-white text-lg mt-0">Amount: <i className="fa-regular font-light text-sm fa-indian-rupee-sign"></i><input type="text" className='bg-transparent w-24' disabled value={formatCurrency(parseInt(Number(amount) * (10 / 100)))} /></p>
          </div>
        </div>
        {/* four  */}
        <div className="bg-cust-cream/70 dark:bg-cust-sinan w-full rounded-2xl border-black flex items-center p-2">
          <i className="rounded-full ml-20 text-6xl text-cust-blue/70 flexa fa-solid fa-handshake"></i>
          <div className='ml-3'><h4 className="text-lg mt-0">Halal Investment: <span className="font-light">10%</span></h4>
            <p className="bg-cust-blue/70 px-3 p-1 rounded-xl text-white text-lg mt-0">Amount: <i className="fa-regular font-light text-sm fa-indian-rupee-sign"></i><input type="text" className='bg-transparent w-24' disabled value={formatCurrency(parseInt(Number(amount) * (10 / 100)))} /></p>
          </div>
        </div>

      </div>
    </Layout>
  )
})
