import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Library from './Library';
// import Article from './Article';

import img1 from "../../../images/rchor.png"
// import img2 from
import img4 from "../../../images/rhand.png"
import img3 from "../../../images/rmoney.png"
import img2 from "../../../images/rzekat.png"
import img5 from "../../../images/zakat1.png"
import img6 from "../../../images/money2.png"
import img7 from "../../../images/last.png"

// import pdf1 from 
import pdf3 from "./files/journal-22-2-21.pdf"
import pdf2 from "./files/Zakath.pdf"
import pdf1 from "./files/Sharia_Investment_in_Islamic_Economic_Principles.pdf"
import pdf4 from "./files/ssrn-2504832.pdf"
import pdf5 from "./files/Literature_Study_of_Riba_In_Banking.pdf"
import pdf6 from "./files/document.pdf"

let article =  [
  {
    "image": img1,
    "pdf": pdf1,
    "heading": "Sharia Investment in Islamic Economic Principles",
    "author": "John Doe"
  },
  {
    "image": img7,
    "pdf": pdf2,
    "heading": "Zakat for generating sustainable income: an emerging mechanism of productive distribution",
    "author": "Jane Smith"
  },
  {
    "image": img3,
    "pdf": pdf3,
    "heading": "Systematic Literature Review on Zakat Distribution Studies as Islamic Social Fund",
    "author": "Michael Johnson"
  },
  {
    "image": img4,"pdf":pdf4,
    "heading": "Ethical Investment in the Stock Market: Halal Investing and Zakat on Stocks",
    "author": "Shafiq"
  },
  {
    "image": img5,"pdf":pdf5,
    "heading": "Climate Change and Global Initiatives",
    "author": "Emily Davis"
  },
  {
    "image": img6,"pdf":pdf6,
    "heading": "Climate Change and Global Initiatives",
    "author": "Emily Davis"
  },
  {
    "image": img6,"pdf":pdf6,
    "heading": "Climate Change and Global Initiatives",
    "author": "Emily Davis"
  }
]
let investment = [
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment2"},
    {link:"investment",title:"investment3"},
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment2"},
    {link:"investment",title:"investment3"},
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment1"},
    {link:"investment",title:"investment2"},
    {link:"investment",title:"investment3"}
  ]


export default function index() {
    return (
            <Routes>
                <Route path="/" element={<Library data={article} investment={investment}/>} />
                {/* <Route path="/:id" element={<Article data={article} />} /> */}
            </Routes>
    )
}
