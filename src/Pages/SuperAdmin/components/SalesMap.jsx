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

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = () => {
  // Chart Data
  const data = {
    labels: ['Canada', 'Greenland', 'USA', 'Australia', 'Brazil'], // Locations
    datasets: [
      {
        label: 'Buyer Sales',
        data: [75, 47, 65, 50, 40], // Example Buyer Sales data (could represent the percentage of total sales)
        backgroundColor: '#4caf50', // Green for Buyer Sales
        borderColor: '#4caf50', // Border color for Buyer Sales
        borderWidth: 1,
        stack: 'stack1',
      },
      {
        label: 'Seller Sales',
        data: [60, 45, 55, 45, 35], // Example Seller Sales data
        backgroundColor: '#3b82f6', // blue for Seller Sales
        borderColor: '#ff9800', // Border color for Seller Sales
        borderWidth: 1,
        stack: 'stack1',
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales by Locations (Buyer vs Seller)',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        stacked: true, // Stacked chart to combine Buyer and Seller sales into one bar
        ticks: {
          callback: function (value) {
            return `${value}%`; // Format y-axis as percentage
          },
        },
      },
    },
  };

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Sales by Locations (Buyer vs Seller)</h2>
        <button className="rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-600">
          Export Report
        </button>
      </div>

      <div className="mt-6 h-[400px] w-full">
        {/* Bar Chart here */}
        <Bar data={data} />
      </div>

      
    </div>
  );
};

export default SalesChart;
