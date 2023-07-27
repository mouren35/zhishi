import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddKnowledge from './page/AddKnowledge/index';
import AddTask from './page/AddTask/index';
import Home from './page/Home/index';
import KnowlengePoint from './page/KnowledgePoint/index';
import Task from './page/Task/index';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/knowlenge_point' element={<KnowlengePoint />} />
          <Route path='/task' element={<Task />} />
          <Route path='/add_knowledge' element={<AddKnowledge />} />
          <Route path='/add_task' element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};