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


const labels = ['Groceries', 'Clothes', 'Rent', 'Skincare', 'Savings', 'Bed', 'Subscriptions'];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
  borderWidth: 0
};

const BudgetBarGraphOverview = () => {
  return <Bar options={options} data={data} />;
}

export default BudgetBarGraphOverview