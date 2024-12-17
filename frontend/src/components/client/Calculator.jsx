import React, { memo, useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useFormNew,showToast } from '../utility';
import Layout from '../utility/Layout';

export default memo( function Calculator() {
    const circleref = useRef(null)
    
        let [value, handleChange] = useFormNew({
            loannTenure: 5,
            loan: 100000,
            profit: 6.5,
        }), { loan, profit, loannTenure } = value
        loan = loan > 10000000 ? 100000: loan;
        profit = profit > 30 ? 6.5: profit;
        loannTenure = loannTenure > 30 ? 5: loannTenure;
    
        const [results, setResults] = useState({
            monthlyPayment: '',
            principalAmount: '',
            totalProfit: '',
            totalAmount: "",
            isResult: false,
        })
    
        const formatCurrency = (amount) =>{
            // amount
        return new Intl.NumberFormat("en-IN").format(amount)
    }
        const calculateResults = ({ loan, profit, loannTenure }) => {
            const userAmount = Number(loan)                   //principal
            const calcProfit = Number(profit)                // rate 
            const tenureYeare = Number(loannTenure)         // time
    
            if (!loan || !profit || !loannTenure || loan < 10000 || profit < 1 || loannTenure <= 0) {
                showToast("Invalid input. Please ensure all values are positive numbers.",null,"hi");
                return;
            }
    
            const [p, r, t] = [userAmount, calcProfit, tenureYeare]
    
            let calculatedprofit = ((p * r ) / 100)  // monthly payment = P⋅r⋅t / 100
    
    
            // check  finite number
            if (isFinite(calculatedprofit)) {
                
                let totalAmount = parseInt(calculatedprofit + userAmount);
                let calculatedEMI = parseInt(totalAmount / (12 * tenureYeare))
    
                setResults({
                    monthlyPayment: "₹"+formatCurrency(calculatedEMI),
                    principalAmount: "₹"+formatCurrency(parseInt(userAmount)),
                    totalProfit: "₹"+formatCurrency(parseInt(calculatedprofit)),
                    totalAmount: "₹"+formatCurrency(totalAmount),
                    isResult: true,
                })
            }
        }
    
        function round (){
            const circle = circleref.current;
            let percent
            if (circle) {
              const length = circle.getTotalLength()
              const totalProfit = parseFloat(results.totalProfit.replace(/₹|,/g, "")) || 18;
              const totalAmount = parseFloat(results.totalAmount.replace(/₹|,/g, "")) || 8;
              percent =  totalProfit/ totalAmount ;
              const draw = length * percent
        
              // Apply the stroke styles
              circle.style.strokeDasharray = length
              circle.style.strokeDashoffset = length - draw
            }
            return percent
        }
        useEffect(() => {
            calculateResults({ loan, profit, loannTenure });
        }, [loan, profit, loannTenure]);
    
        useEffect(() => {
            round()
          },[loan, profit, loannTenure])
  return (
    <>
    <Layout content="Calculator"
      additional={<>
         {/* third div */}
         <div className="flex justify-between flex-col gap-11 w-full text-gray-800/80 box-border items-center">
                    
                    <div className="flex justify-between flex-col mt-5 gap-11 w-[20px] text-gray-800/80 box-border items-center relative">
                        <svg width="200" height="200" viewBox="0 0 300 300" className='-rotate-90 bg-cust-/30'>
                            <circle cx="150" cy="150" r="110" fill="none" stroke=" rgb(42 130 254 / 0.3)" strokeWidth="34" />
                            <circle ref={circleref} cx="150" cy="150" r="110" fill="none" stroke=" rgb(42 130 254 / 0.9)" strokeWidth="34" strokeLinecap="" />
                        </svg>                                                                                                  {/* parseInt(round()*100)*/}
                        <h5 className="absolute nadu top-1/2 left-1/2 text-center text-cust-blue font-bold text-3xl w-20 overflow-hidden hid0den">{parseInt(round()*100)}%</h5>
                    </div>
                    </div>
                    <div className="mt-6">
                    <><i className="fa-solid fa-rectangle-wide ml-4 text-cust-blue/30"></i><span className='text-sm text-black/95 dark:text-white ml-4'>Total Amount</span></><br/>
                    <><i className="fa-solid fa-rectangle-wide ml-4 text-cust-blue/90"></i><span className='text-sm text-black/95 dark:text-white ml-4'>Total Profit</span></>
                    </div>
      </>}>
     <div className='h-auto max-md:h-[150vh]'> <div className=" md:w-[600px] text-white mx-auto h-[100px] bg-cust-blue/95 rounded-xl p-5">
        <h1 className="text-2xl font-medium my-0">EMI Calculator</h1>
        <p className='font-extralight text-sm capitalize'>get help to distribute your financial property <br /> with our suggested allocations</p>
      </div>
<br />

<div className="m-auto text-white max-md:-mt-16 absolute top-[65%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 md:w-[710px] flex max-md:flex-col flex-row justify-center items-center gap-9 overflow-">
<form className="calc flex justify-between items-cnter flex-col gap-11 w-[390px] text-gray-800/80">
                        <div className='flex-1'>
                            <h3 className='flex items-center  dark:text-white mb-7'>Loan amount <span className={`px-2 py-0 h-7 ml-auto inline-flex min-w-20 max-w-28 font-medium ${loan < 10000 ? 'text-rose-500 bg-rose-500/20' : 'text-blue-600 bg-cust-blue/30'}`}>₹<input type="text" onChange={(e) => handleChange(e)} className="bg-transparent outline-none border-none w-full text-right" name="loan" value={loan} /> </span> </h3>
                            <div className="relative  text-white h-[3px] bg-slate-300">
                            <input className='absolute top-1/2 outline-none border-none slider appearance-none w-full h-full bg-transparent' max='10000000' min="10000" type="range" name="loan" value={loan} onChange={(e) => handleChange(e)} />
                            <div style={{ width: `${((loan / 10000000) * 100) || 0}%` }} className={`rounded-2xl absolute -translate-y-[2.5px] top-1/2 bg-cust-blue h-[100%] z-[1]`}></div>
                            </div>
                        </div>
                        <div>
                            <h3 className='flex items-center  dark:text-white mb-7'>Rate of profit <span className={`px-2 py-0 h-7 ml-auto inline-flex min-w-20 max-w-28 font-medium ${loannTenure < 1 ? 'text-rose-500 bg-rose-500/20' : 'text-blue-600 bg-cust-blue/30'}`}><input type="text" onChange={(e) => handleChange(e)} className="bg-transparent outline-none border-none w-full text-right" name="profit" value={profit} /> %</span> </h3>
                            <div className="relative  text-white h-[3px] bg-slate-300">
                                <input className='absolute dark:text-white top-1/2 outline-none border-none slider appearance-none w-full h-full bg-transparent' max='30' min="1" type="range" name="profit" value={profit} onChange={(e) => handleChange(e)} />
                                <div style={{ width: `${((profit / 30) * 100) || 0}%` }} className={`rounded-2xl absolute -translate-y-[2.2px] top-1/2 bg-cust-blue h-[100%] z-[1]`}></div>
                            </div>
                        </div>
                        <div>
                            <h3 className='flex  dark:text-white items-center mb-7'>Loan tenure <span className={`px-2 py-0 h-7 ml-auto inline-flex min-w-20 max-w-28 font-medium ${loannTenure < 1 ? 'text-rose-500 bg-rose-500/20' : 'text-blue-600 bg-cust-blue/30'}`}><input type="text" onChange={(e) => handleChange(e)} className="bg-transparent outline-none border-none w-full text-right" name="loannTenure" value={loannTenure} />Yr</span> </h3>
                            <div className="relative h-[3px] bg-slate-300">

                                <input className='absolute top-1/2 outline-none border-none slider appearance-none w-full h-full bg-transparent' max='30' min="1" type="range" name="loannTenure" value={loannTenure} onChange={(e) => handleChange(e)} />
                                <div style={{ width: `${((loannTenure / 30) * 100) || 0}%` }} className={`rounded-2xl absolute -translate-y-[2.2px] top-1/2 bg-cust-blue h-[100%] z-[1]`}></div>
                            </div>
                        </div>
                        <span>
                        </span>
                    </form>
            <div className="flex-1 p-10 bg-cust-blue/90 text-xs text-white rounded-2xl w-[370px] md:h-[300px] gap-10 flex flex-col items-start">
                        <h3 className='flex w-full flex-1'>Monthly EMI <span className='ml-auto'><input type='text' className='text-end font-serif w-[80px] ml-auto ' value={results.monthlyPayment} disabled /></span></h3>
                        <h3 className='flex w-full flex-1'>principal Amount <span className='ml-auto'><input type='text'className='ml-auto font-serif text-end w-[80px]'value={results.principalAmount} disabled /></span></h3>
                        <h3 className='inline-flex w-full'>Total Profit<span className='ml-auto'><input type='text' className='text-end w-[80px] font-serif' value={results.totalProfit} disabled /></span></h3>
                        <h3 className='flex w-full flex-1'>Total Amount <span className='ml-auto'> <input type='text' className='text-end w-[80px] font-serif' value={results.totalAmount} disabled /></span></h3>
            </div>
        </div></div>
    </Layout>
    {/* <i className="fa-solid fa-indian-rupee-sign"></i> */}
    
    </>
  )
})
