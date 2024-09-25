import React, { useState } from 'react'
import ExpenseTracker from './Components/ExpenseTracker'
import Navbar from './Components/Navbar'
import ExpenseList from './Components/ExpenseList';
import ExpenseChart from './Components/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([
    {
      amount: 50,
      description: 'Grocery Shopping',
      date: '2024-09-20',
      category: 'Food',
      paymentMethod: 'Credit Card'
    },
    {
      amount: 150,
      description: 'Gym Membership',
      date: '2024-09-10',
      category: 'Health',
      paymentMethod: 'Debit Card'
    },
    {
      amount: 75,
      description: 'Gasoline',
      date: '2024-09-15',
      category: 'Transport',
      paymentMethod: 'Cash'
    }
  ]);
  const handleAddExpense = (expense) => {
    setExpenses([ ...expenses, expense ]);
  };
  return (
    <div className=' '>
          <Navbar/>
          
      {/* <ExpenseForm /> */}
      
          <div className="flex gap-2">
          <ExpenseTracker  className='' onAddExpense={handleAddExpense}/>
          <ExpenseChart/> 
          </div>
        
         

         <h2 className="text-xl font-semibold mb-2 text-center py-4">Expense History</h2>
         <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App


