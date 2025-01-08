import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Bubble,
  Scatter,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Necessary for Radar and Polar Area charts
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Register radialLinear scale for Radar and Polar Area charts
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

// Shared chart data
const sharedData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Dataset 1",
      data: [50, 60, 70, 80, 90],
      backgroundColor: [
        "#3B82F6", // Tailwind blue-500
        "#06B6D4", // Tailwind cyan-500
        "#10B981", // Tailwind green-500
        "#F59E0B", // Tailwind yellow-500
        "#EF4444", // Tailwind red-500
      ],
      borderColor: "#2563EB", // Tailwind blue-600
      borderWidth: 1,
    },
    {
      label: "Dataset 2",
      data: [45, 55, 25, 35, 100],
      backgroundColor: [
        "#D946EF", // Tailwind fuchsia-500
        "#8B5CF6", // Tailwind purple-500
        "#6366F1", // Tailwind indigo-500
        "#14B8A6", // Tailwind teal-500
        "#22D3EE", // Tailwind cyan-400
      ],
      borderColor: "#7C3AED", // Tailwind purple-600
      borderWidth: 1,
    },
    {
      label: "Dataset 3",
      data: [90, 50, 60, 40, 30],
      backgroundColor: [
        "#F472B6", // Tailwind pink-400
        "#F87171", // Tailwind red-400
        "#FBBF24", // Tailwind amber-400
        "#4ADE80", // Tailwind green-400
        "#60A5FA", // Tailwind blue-400
      ],
      borderColor: "#DC2626", // Tailwind red-600
      borderWidth: 1,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Graphical Views with Animations" },
  },
  animation: {
    duration: 3000, // 2 seconds
    easing: "easeOutBounce",
    // All possihle easing here.
    // linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, 
    // easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine,
    //  easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, 
    // easeInElastic, easeOutElastic, easeInOutElastic, easeInBounce, easeOutBounce, easeInOutBounce

    onComplete: () => console.log("Animation Complete"),
  },
  datasets: {
    bar: {
      animation: {
        y: {
          from: 0, // Bars grow from 0 height
        },
      },
    },
  },
};


const GraphViews = () => {
  return (
    <div className="flex flex-col items-center space-y-10 bg-gray-100 min-h-screen p-10">
      {/* Bar Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Bar Chart</h2>
        <Bar data={sharedData} options={options} />
      </div>

      {/* Line Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Line Chart</h2>
        <Line data={sharedData} options={options} />
      </div>

      {/* Pie Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Pie Chart</h2>
        <Pie data={sharedData} options={options} />
      </div>

      {/* Doughnut Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Doughnut Chart</h2>
        <Doughnut data={sharedData} options={options} />
      </div>

      {/* Radar Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Radar Chart</h2>
        <Radar data={sharedData} options={options} />
      </div>

      {/* Polar Area Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Polar Area Chart
        </h2>
        <PolarArea data={sharedData} options={options} />
      </div>

      {/* Bubble Chart */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Bubble Chart</h2>
        <Bubble
          data={{
            datasets: [
              {
                label: "Bubble Dataset",
                data: [
                  { x: 10, y: 20, r: 10 },
                  { x: 15, y: 25, r: 15 },
                  { x: 20, y: 30, r: 20 },
                ],
                backgroundColor: "#06B6D4", // Tailwind cyan-500
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
                label: "Scatter Dataset",
                data: [
                  { x: 5, y: 5 },
                  { x: 10, y: 10 },
                  { x: 15, y: 15 },
                ],
                backgroundColor: "#10B981", // Tailwind green-500
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
