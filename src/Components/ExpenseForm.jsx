// src/components/ExpenseList.jsx
import React, { useState } from 'react';

const defaultExpenses = [
  { amount: 100, description: 'Groceries', date: '2024-09-20', category: 'Food', paymentMethod: 'Credit Card' },
  { amount: 50, description: 'Electricity Bill', date: '2024-09-18', category: 'Utilities', paymentMethod: 'Debit Card' },
  { amount: 200, description: 'Laptop Repair', date: '2024-09-15', category: 'Electronics', paymentMethod: 'Cash' },
  { amount: 75, description: 'Dinner', date: '2024-09-10', category: 'Food', paymentMethod: 'Credit Card' },
  { amount: 30, description: 'Bus Pass', date: '2024-09-05', category: 'Transport', paymentMethod: 'Cash' },
];

const ExpenseForm = () => {
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      {/* Expense table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">${expense.amount}</td>
                  <td className="border border-gray-300 p-2">{expense.description}</td>
                  <td className="border border-gray-300 p-2">{expense.date}</td>
                  <td className="border border-gray-300 p-2">{expense.category}</td>
                  <td className="border border-gray-300 p-2">{expense.paymentMethod}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center border border-gray-300 p-4">No expenses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseForm;
