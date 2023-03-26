import {  useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home'
import { dataService } from './services/generalService/dataServices';
// import '../assets/styles/main.scss'

const App = () => {

  useEffect(() => {
    console.log("App Mount");
    dataService.initData();
   
    return () => {
      console.log('Unmount app');
      // dataService.removeData();
    }
  }, [])

  return (
    <div className="app">
      <Home />
    </div>
  )
};
export default App;

//layout of app
// delete task
// add task task
// edit task

