import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Contact from './Components/Contact/Contact';
import AddTask from './Components/Task/AddTask';
import AllTasks from './Components/Task/AllTasks';
import CompleteTask from './Components/Task/CompleteTask';
import PendingTask from './Components/Task/PendingTask';
import Deployed from './Components/Task/Deployed';
import Deferred from './Components/Task/Deferred';
import InProgressTask from './Components/Task/InProgressTask';
import Dashboard from './Components/Task/Dashboard';
import Main from './Components/Task/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar /><Hero /><About /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path="/addTask" element={<AddTask />} />
      <Route path="/allTask" element={<AllTasks />} />
      <Route path="/completeTask" element={<CompleteTask />} />
      <Route path="/pendingTask" element={<PendingTask />} />
      <Route path="/deployedTask" element={<Deployed />} />
      <Route path="/deferredTask" element={<Deferred />} />
      <Route path="/inProgressTask" element={<InProgressTask />} />
      <Route path="/statsTask" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;

