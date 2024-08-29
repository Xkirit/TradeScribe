import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
  // Initialize state with default values
  const [equityData, setEquityData] = useState({
    labels: [],
    datasets: [],
  });
  const [monthlyTradesData, setMonthlyTradesData] = useState({
    labels: [],
    datasets: [],
  });
  const [winLossData, setWinLossData] = useState({
    labels: [],
    datasets: [],
  });
  const [summaryStats, setSummaryStats] = useState({
    totalTrades: 0,
    winningTrades: 0,
    losingTrades: 0,
    winRate: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/trades/stats'); // Update with your actual API endpoint
        const data = await response.json();

        // Process data for equity chart
        setEquityData({
          labels: data.monthlyEquity?.map(d => d.month) || [],
          datasets: [
            {
              label: 'Equity Change',
              data: data.monthlyEquity?.map(d => d.value) || [],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });

        // Process data for monthly trades bar chart
        setMonthlyTradesData({
          labels: data.monthlyTrades?.map(d => d.month) || [],
          datasets: [
            {
              label: 'Number of Trades',
              data: data.monthlyTrades?.map(d => d.count) || [],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1,
            },
          ],
        });

        // Process data for win/loss pie chart
        setWinLossData({
          labels: ['Wins', 'Losses'],
          datasets: [
            {
              data: [data.winLossRatio?.wins || 0, data.winLossRatio?.losses || 0],
              backgroundColor: ['#059212', '#F3FF90'],
              borderColor: '#FFFFFF',
            },
          ],
        });

        // Set summary statistics
        setSummaryStats({
          totalTrades: data.summaryStats?.totalTrades || 0,
          winningTrades: data.summaryStats?.winningTrades || 0,
          losingTrades: data.summaryStats?.losingTrades || 0,
          winRate: data.summaryStats?.winRate || 0,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Value: ${context.raw}`;
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
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" min-h-screen py-[8vh] px-4">
      <h1 className="text-3xl font-bold text-green-900">Equity Analysis</h1>
      <p className="text-secondary-lightest mb-8">
        Analyze your trading performance with various charts and metrics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Equity Change Over Time</h2>
          <Line data={equityData} options={options} />
        </div>

        <div className="p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Monthly Trades</h2>
          <Bar data={monthlyTradesData} options={options} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8 justify-center">
        <div className="flex-1 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-bold text-primary mb-4">Summary Statistics</h2>
          <p><strong>Total Trades:</strong> {summaryStats.totalTrades}</p>
          <p><strong>Winning Trades:</strong> {summaryStats.winningTrades}</p>
          <p><strong>Losing Trades:</strong> {summaryStats.losingTrades}</p>
          <p><strong>Win Rate:</strong> {summaryStats.winRate}%</p>
        </div>

        <div className="flex-1 p-6 rounded-lg shadow-lg backdrop-blur-md flex items-center justify-center">
          <div style={{ width: '300px', height: '300px' }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Win/Loss Ratio</h2>
            <Pie data={winLossData} options={options} />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg backdrop-blur-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Filters</h2>
        <div className="flex space-x-4">
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
            Last 30 Days
          </button>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
            Last 6 Months
          </button>
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">
            Year to Date
          </button>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg backdrop-blur-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Recent Updates</h2>
        <ul className="list-disc pl-5">
          <li>Update 1: Improvements in trade analysis.</li>
          <li>Update 2: Added new filter options.</li>
          <li>Update 3: Enhanced chart visualizations.</li>
        </ul>
      </div>

      <div className="p-6 rounded-lg shadow-md backdrop-blur-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Trade Insights</h2>
        <p className="text-primary">
          Detailed insights into your trading patterns and strategies.
        </p>
        <p className="text-primary">
          Here you can add various metrics or observations based on your trading data.
        </p>
      </div>

      <div className="p-6 rounded-lg shadow-md backdrop-blur-md mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Upcoming Features</h2>
        <p className="text-primary">
          Stay tuned for upcoming features and improvements to the analysis tools.
        </p>
      </div>
    </div>
  );
};

export default Analysis;
