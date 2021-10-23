import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

// import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 394.12,
      date: new Date(2021, 7, 15),
    },
    { 
      id: "e2", 
      title: "Internet", 
      amount: 79.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Phone bill",
      amount: 294.67,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e4",
      title: "Suitecases",
      amount: 450,
      date: new Date(2021, 10, 12),
    },
    {
      id: "e5",
      title: "Airline tickets",
      amount: 3240,
      date: new Date(2021, 10, 15),
    },
    {
      id: "e6",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e7",
      title: "Hotel",
      amount: 1150,
      date: new Date(2021, 9, 12),
    },
    {
      id: "e8",
      title: "Activities",
      amount: 750,
      date: new Date(2021, 11, 12),
    },
  ];


  return (
    <>
   
    <Expenses items={expenses}/>
   
    </>
  );
}

export default App;
