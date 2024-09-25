// src/ExpenseTracker.js
import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // For charts, you'll install apexcharts

const ExpenseTracker = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = () => {
    const newExpense = { amount, description, date, category, paymentMethod };
    setExpenses([...expenses, newExpense]);
    // Clear inputs
    setAmount('');
    setDescription('');
    setDate('');
    setCategory('');
    setPaymentMethod('');
  };


 

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Expense Tracker</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-5 w-full" required
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded" required
        />


        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded" required
        />


        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded" required
        />

       

       
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        >
          <option value="">Select Category</option> 
          <option value="food" className=''>Food</option>
          <option value="travel">Travel</option>
          <option value="rent">Rent</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
        </select>


       
        <select
          name="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border rounded outline-none"
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
        </select>
      </div>
      <button
        onClick={handleAddExpense}
        className="mt-5 bg-blue-500 text-white p-2 rounded"
      >
        Add Expense
      </button>

      {/* Display filtered expenses */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Expenses</h2>
        <ul>
          {filteredExpenses.map((expense, index) => (
            <li key={index} className="border-b py-2">
              <span>{expense.date} - {expense.description}: ${expense.amount} ({expense.category}, {expense.paymentMethod})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chart Section */}
      <div className="mt-5">
        <Chart
          options={{
            chart: {
              type: 'pie',
            },
            labels: expenses.map(expense => expense.category),
          }}
          series={expenses.map(expense => parseFloat(expense.amount))}
          type="pie"
          width="380"
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
