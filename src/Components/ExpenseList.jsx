import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
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
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{expense.amount}</td>
              <td className="border border-gray-300 p-2">{expense.description}</td>
              <td className="border border-gray-300 p-2">{expense.date}</td>
              <td className="border border-gray-300 p-2">{expense.category}</td>
              <td className="border border-gray-300 p-2">{expense.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
