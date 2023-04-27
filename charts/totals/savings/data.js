import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

let now = dayjs();
const options = 'MMM D';
const transaction_opt = 'YYYY-MM-DD'

function savingsTotalData() {

  const [total, setTotal] = useState()
  async function getSavingsGraphData() {
  
    const res = await axios.get('/api/get-savings-graph-data')
  
    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    
    setTotal(res.data)
  }

  

  useEffect(() => {
    getSavingsGraphData();
  }, [])

  const data = [
    {
      "id": "saved",
      "data": [
        {
          'x': now.subtract(7, 'day').format(options),
          'y': total ? total.seven_days_ago.gain : 0,  
        },
        {
          'x': now.subtract(6, 'day').format(options),
          'y': total ? total.six_days_ago.gain : 0,
        },
        {
          'x': now.subtract(5, 'day').format(options),
          'y': total ? total.five_days_ago.gain : 0,
        },
        {
          'x': now.subtract(4, 'day').format(options),
          'y': total ? total.four_days_ago.gain : 0,
        },
        {
          'x': now.subtract(3, 'day').format(options),
          'y': total ? total.three_days_ago.gain : 0,
        },
        {
          'x': now.subtract(2, 'day').format(options),
          'y': total ? total.two_days_ago.gain : 0,
        },
        {
          'x': now.subtract(1, 'day').format(options),
          'y': total ? total.yesterday.gain : 0,
        },
      ]
    },
    {
      "id": "withdrawal",
      "data": [
        {
          'x': now.subtract(7, 'day').format(options),
          'y': total ? total.seven_days_ago.expense : 0,  
        },
        {
          'x': now.subtract(6, 'day').format(options),
          'y': total ? total.six_days_ago.expense : 0,
        },
        {
          'x': now.subtract(5, 'day').format(options),
          'y': total ? total.five_days_ago.expense : 0,
        },
        {
          'x': now.subtract(4, 'day').format(options),
          'y': total ? total.four_days_ago.expense : 0,
        },
        {
          'x': now.subtract(3, 'day').format(options),
          'y': total ? total.three_days_ago.expense : 0,
        },
        {
          'x': now.subtract(2, 'day').format(options),
          'y': total ? total.two_days_ago.expense : 0,
        },
        {
          'x': now.subtract(1, 'day').format(options),
          'y': total ? total.yesterday.expense : 0,
        },
      ]
    },
  ]

  return data 

}






export default savingsTotalData;
