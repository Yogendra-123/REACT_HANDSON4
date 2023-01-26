import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './ContactUs';
import StudentList from './Students';
import {AddStudents} from './Student2';
import React from 'react';

function App(){
 
  return (
    <div>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/studentlist' element={<StudentList />}/>
      <Route path='/studentlist/AddStudents' element={<AddStudents/>} />
      </Routes>
     

    </div>
  );
 }

export default App;