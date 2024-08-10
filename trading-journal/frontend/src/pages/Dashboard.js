import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example data for the equity curve
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Equity Curve',
        data: [1000, 1200, 1500, 1400, 1700, 1600, 1800, 1900, 2000, 2100, 2200, 2300],
        borderColor: '#4B9CD3',
        backgroundColor: 'rgba(75, 158, 219, 0.2)',
        fill: true,
        tension: 0.4, // Makes the line smooth
        pointRadius: 0, // Removes the nodes
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to be as wide as its container
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        grid: {
          display: false, // Removes grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: 'Equity ($)',
        },
        grid: {
          display: false, // Removes grid lines
        },
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-primary mb-4">Equity Curve</h1>
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg w-max px-5 h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
