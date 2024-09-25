// src/components/ExpenseChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  // Default expenses
  const expenses = [
    { amount: 100, description: 'Groceries', date: '2024-09-20', category: 'Food', paymentMethod: 'Credit Card' },
    { amount: 50, description: 'Electricity Bill', date: '2024-09-18', category: 'Utilities', paymentMethod: 'Debit Card' },
    { amount: 200, description: 'Laptop Repair', date: '2024-09-15', category: 'Electronics', paymentMethod: 'Cash' },
    { amount: 75, description: 'Dinner', date: '2024-09-10', category: 'Food', paymentMethod: 'Credit Card' },
    { amount: 30, description: 'Bus Pass', date: '2024-09-05', category: 'Transport', paymentMethod: 'Cash' },
  ];

  // Calculate total amount spent in each category
  const expenseByCategory = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = acc[category] ? acc[category] + amount : amount;
    return acc;
  }, {});

  // Prepare chart data
  const data = {
    labels: Object.keys(expenseByCategory),
    datasets: [
      {
        label: 'Total Expenses by Category',
        data: Object.values(expenseByCategory),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Tracker by Category',
      },
    },
  };

  return (
    <div className="container   mx-auto p-3 pt-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker Chart</h1>
      <div className="bg-white p-6 rounded shadow-md w-[1000px] h-[800px]">
        <Bar data={data} options={options}  />
      </div>
    </div>
  );
};

export default ExpenseChart;
