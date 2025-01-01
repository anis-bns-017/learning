import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadarController,
  PolarAreaController,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, RadarController, PolarAreaController, Tooltip, Legend);

// Shared Chart Data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [50, 60, 70, 80, 90],
      backgroundColor: ['#3B82F6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'],
      borderColor: '#2563EB',
      borderWidth: 1,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Graphical Views' },
  },
};

const GraphViews = () => {
  return (
    <div className="flex flex-col items-center space-y-10 bg-gray-100 min-h-screen p-10">
      {/* Bar Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Bar Chart</h2>
        <Bar data={data} options={options} />
      </div>

      {/* Line Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Line Chart</h2>
        <Line data={data} options={options} />
      </div>

      {/* Pie Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Pie Chart</h2>
        <Pie data={data} options={options} />
      </div>

      {/* Doughnut Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Doughnut Chart</h2>
        <Doughnut data={data} options={options} />
      </div>

      {/* Radar Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Radar Chart</h2>
        <Radar data={data} options={options} />
      </div>

      {/* Polar Area Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Polar Area Chart</h2>
        <PolarArea data={data} options={options} />
      </div>

      {/* Bubble Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Bubble Chart</h2>
        <Bubble
          data={{
            datasets: [
              {
                label: 'Bubble Dataset',
                data: [
                  { x: 10, y: 20, r: 10 },
                  { x: 15, y: 25, r: 15 },
                  { x: 20, y: 30, r: 20 },
                ],
                backgroundColor: '#06B6D4',
              },
            ],
          }}
          options={options}
        />
      </div>

      {/* Scatter Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Scatter Chart</h2>
        <Scatter
          data={{
            datasets: [
              {
                label: 'Scatter Dataset',
                data: [
                  { x: 5, y: 5 },
                  { x: 10, y: 10 },
                  { x: 15, y: 15 },
                ],
                backgroundColor: '#10B981',
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default GraphViews;
