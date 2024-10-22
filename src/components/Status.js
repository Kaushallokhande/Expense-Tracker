// Status.js
import React, { useState } from 'react';
import { Bar, Pie, Line, Doughnut, Radar, Scatter } from 'react-chartjs-2'; // Import Scatter
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler,
    RadialLinearScale,
    ScatterController // Import ScatterController
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler,
    RadialLinearScale,
    ScatterController // Register ScatterController
);

const Status = () => {
    const [selectedChart, setSelectedChart] = useState('pie');

    // Sample data for all charts
    const data = {
        labels: ['Rent', 'Utilities', 'Groceries', 'Transportation', 'Entertainment'],
        datasets: [
            {
                label: 'Monthly Expenses',
                data: [1200, 300, 400, 150, 200],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
                tension: 0.1,
            },
        ],
    };

    // Sample data for the scatter chart
    const scatterData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: [
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    // Bar chart options
    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Expenses - Bar Chart',
            },
        },
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expense Overview',
            },
        },
    };

    const renderChart = () => {
        switch (selectedChart) {
            case 'bar':
                return <Bar data={data} options={options} />;
            case 'line':
                return <Line data={data} options={options} />;
            case 'doughnut':
                return <Doughnut data={data} options={options} />;
            case 'radar':
                return <Radar data={data} options={options} />;
            case 'scatter':
                return <Scatter data={scatterData} options={options} />;
            case 'pie':
            default:
                return <Pie data={data} options={options} />;
        }
    };

    return (
        <div className="bg-gray-50 py-8 px-6 min-h-screen">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Expense Overview</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    {renderChart()}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <Bar data={data} options={barOptions} />
                </div>
            </div>

            <div className="mt-6">
                <label htmlFor="chartType" className="block text-gray-700 font-medium mb-2">
                    Select Chart Type:
                </label>
                <select
                    id="chartType"
                    value={selectedChart}
                    onChange={(e) => setSelectedChart(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="pie">Pie Chart</option>
                    <option value="line">Line Chart</option>
                    <option value="doughnut">Doughnut Chart</option>
                    <option value="radar">Radar Chart</option>
                    <option value="scatter">Scatter Chart</option>
                </select>
            </div>
        </div>
    );
};

export default Status;
