import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import data from './data.json'; // Import your JSON file here

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const vibrantColors = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED',
  '#FF4500', '#32CD32', '#FFD700', '#1E90FF', '#C71585', '#00FA9A', '#FF1493',
  '#4682B4', '#D2691E', '#8A2BE2', '#A52A2A', '#7FFF00', '#5F9EA0', '#DDA0DD',
  '#8B0000', '#B8860B', '#006400', '#20B2AA', '#6495ED', '#DC143C', '#2E8B57',
  '#FF6347', '#778899',
];

const AllChartTypes = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data[selectedMonth]);
  }, [selectedMonth]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
  };

  const chartDataForAllCharts = {
    labels: chartData.map((item) => `Day ${item.day}`),
    datasets: [
      {
        label: selectedMonth,
        data: chartData.map((item) => item.value),
        borderColor: vibrantColors.slice(0, chartData.length),
        backgroundColor: vibrantColors.slice(0, chartData.length),
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const bubbleScatterData = chartData.map((item) => ({
    x: item.day,
    y: item.value,
    r: Math.random() * 10 + 5, // Random radius for Bubble Chart
  }));

  const bubbleScatterChartData = {
    datasets: [
      {
        label: `${selectedMonth} Bubble/Scatter Data`,
        data: bubbleScatterData,
        backgroundColor: vibrantColors.slice(0, chartData.length),
        borderColor: vibrantColors.slice(0, chartData.length),
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="month-select" className="block text-lg font-semibold mb-2">
          Select Month:
        </label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {Object.keys(data).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-32">
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Bar Chart</h2>
          <Bar data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Line Chart</h2>
          <Line data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Pie Chart</h2>
          <Pie data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Doughnut Chart</h2>
          <Doughnut data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Radar Chart</h2>
          <Radar data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Polar Area Chart</h2>
          <PolarArea data={chartDataForAllCharts} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Bubble Chart</h2>
          <Bubble data={bubbleScatterChartData} options={chartOptions} />
        </div>
        <div className="w-full h-screen">
          <h2 className="text-2xl font-semibold text-center mb-4">Scatter Chart</h2>
          <Scatter data={bubbleScatterChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default AllChartTypes;
