import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "dotenv"
import Auth from "./components/Auth"
import Home from './components/client/Home';
import Calculator from './components/client/Calculator';
import Calender from './components/client/Calender';
import Library from './components/client/Articles';
import Studyspot from './components/client/StudySpot';
import ChatBox from './components/client/ChatBox';
// import C from "./svgs/new.svg"
let Hi = ()=><div className='bg-red-500 w- h-svh'>hlo</div>
function App() {
  
  return (
    <Router className="App">
      {/* <div className="h-80 w-80 bg-red-500"></div> */}
      {/* <Hi /> */}
      <Routes>

        <Route path="/auth/*" element={<Auth />} />
        <Route path="/" Component={Home} />
        <Route path="/EMI-calculator" Component={Calculator} />
        <Route path="/financial-planner" Component={Calender} />
        <Route path="/Articles/*" Component={Library} />
        <Route path="/study-spot/*" Component={Studyspot} />
        <Route path="/chat-with-mentor/" Component={ChatBox} />
        <Route path="/*" element={<>
        </>} />
      </Routes>
      {/* <img src={C} alt="" srcset="" /> */}
    </Router>

  );
}
// mKG0S93ventqSuI7
// mongodb+srv://halalfinance:mKG0S93ventqSuI7@meezan.ixd3c.mongodb.net/
export default App;
