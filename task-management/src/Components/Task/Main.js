import React from 'react'
import AllTasks from './AllTasks'
import Sidebar from './Sidebar'; 
import AddTask from './AddTask'; 
import CompleteTask from './CompleteTask';
import PendingTask from './PendingTask';
import Deployed from './Deployed';
import Deferred from './Deferred';
import InProgressTask from './InProgressTask';
import Dashboard from './Dashboard';
import { Route,Routes } from 'react-router-dom';

const Main = () => {
  return (
    <div className='flex h-full '>
    <Sidebar />
    <Routes>
      <Route path="/" element={<AllTasks />} />
      <Route path="/addTask" element={<AddTask />} />
      <Route path="/allTask" element={<AllTasks />} />
      <Route path="/completeTask" element={<CompleteTask />} />
      <Route path="/pendingTask" element={<PendingTask />} />
      <Route path="/deployedTask" element={<Deployed />} />
      <Route path="/deferredTask" element={<Deferred />} />
      <Route path="/inProgressTask" element={<InProgressTask />} />
      <Route path="/statsTask" element={<Dashboard />} />
    </Routes>
  </div>
  )
}

export default Main
