import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function TiffinServiceChart() {
  // State to track the selected time period
  const [timePeriod, setTimePeriod] = useState('ALL')

  // Chart Data based on the selected time period
  const getChartData = (period) => {
    switch (period) {
      case '1M':
        return {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            { 

              
              label: 'Sellers\' Earnings (1M)',
              data: [12000, 14000, 13000, 16000, 15000, 17000], // Seller earnings in $ for last 1 month
              fill: true,
              borderColor: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.2)',
              tension: 0.4,
            },
            {
              label: 'Buyers\' Orders (1M)',
              data: [100, 120, 110, 130, 125, 135], // Number of orders for last 1 month
              fill: true,
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.2)',
              tension: 0.4,
            }
          ],
        }
      case '6M':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Sellers\' Earnings (6M)',
              data: [13000, 14000, 12000, 16000, 17000, 18000],
              fill: true,
              borderColor: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.2)',
              tension: 0.4,
            },
            {
              label: 'Buyers\' Orders (6M)',
              data: [110, 130, 120, 140, 135, 145],
              fill: true,
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.2)',
              tension: 0.4,
            }
          ],
        }
      case '1Y':
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sellers\' Earnings (1Y)',
              data: [12000, 14000, 13000, 16000, 15000, 17000, 18000, 19000, 20000, 21000, 22000, 24000],
              fill: true,
              borderColor: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.2)',
              tension: 0.4,
            },
            {
              label: 'Buyers\' Orders (1Y)',
              data: [100, 120, 110, 130, 125, 135, 140, 150, 160, 165, 170, 180],
              fill: true,
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.2)',
              tension: 0.4,
            }
          ],
        }
      default:
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Sellers\' Earnings (ALL)',
              data: [12000, 14000, 13000, 16000, 15000, 17000, 18000],
              fill: true,
              borderColor: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.2)',
              tension: 0.4,
            },
            {
              label: 'Buyers\' Orders (ALL)',
              data: [100, 120, 110, 130, 125, 135, 140],
              fill: true,
              borderColor: '#ff9800',
              backgroundColor: 'rgba(255, 152, 0, 0.2)',
              tension: 0.4,
            }
          ],
        }
    }
  }

  // Get chart data based on the selected time period
  const data = getChartData(timePeriod)

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Tiffin Service - ${timePeriod} Overview`,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}` // Format y-axis as currency for earnings
          },
        },
      },
    },
  }

  // Handle button clicks to update the selected time period
  const handleTimePeriodChange = (period) => {
    setTimePeriod(period)
  }

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tiffin Service Overview</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handleTimePeriodChange('ALL')}
            className={`rounded-lg px-3 py-1 text-sm ${timePeriod === 'ALL' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            ALL
          </button>
          <button
            onClick={() => handleTimePeriodChange('1M')}
            className={`rounded-lg px-3 py-1 text-sm ${timePeriod === '1M' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            1M
          </button>
          <button
            onClick={() => handleTimePeriodChange('6M')}
            className={`rounded-lg px-3 py-1 text-sm ${timePeriod === '6M' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            6M
          </button>
          <button
            onClick={() => handleTimePeriodChange('1Y')}
            className={`rounded-lg px-3 py-1 text-sm ${timePeriod === '1Y' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            1Y
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <div>
          <p className="text-2xl font-semibold">7,585</p>
          <p className="text-sm text-gray-500">Orders (Buyers)</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">$22.89k</p>
          <p className="text-sm text-gray-500">Sellers' Earnings</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">367</p>
          <p className="text-sm text-gray-500">Refunds</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">18.92%</p>
          <p className="text-sm text-gray-500">Conversion Ratio</p>
        </div>
      </div>

      <div className="mt-8 h-4/6 w-full">
        {/* Line Chart here */}
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
