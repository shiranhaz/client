import { useState, useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home'
import { dataService } from './services/generalService/dataServices';

export const App = () => {
  useEffect(() => {
    console.log("App Mount");
    dataService.initData();
    return () => {
      console.log('Unmount app');
      dataService.removeData();
    }
  }, [])
  return (
    <div className="app">
      <Home />
    </div>
  )
};


