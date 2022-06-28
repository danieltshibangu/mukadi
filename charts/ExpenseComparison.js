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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  scales: {
    y: { 
      grid: {
        display: false,
        drawBorder: false, // <-- this removes y-axis line
    }},
  },
  borderWidth: 0,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};


const labels = ['This Month', 'Last Month'];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [120, 1134],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
  borderWidth: 0
};

const ExpenseComparison = () => {
  return <Bar options={options} data={data} />;
}

export default ExpenseComparison