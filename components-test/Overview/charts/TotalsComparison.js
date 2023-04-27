import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    ResponsiveContainer, Legend, Tooltip
} from 'recharts'


}

export default function Example() {

  
    let now = dayjs();
const options = 'MMM D';
const transaction_opt = 'YYYY-MM-DD'

let start = now.subtract(7, 'day').format(transaction_opt).toString()
let end = now.subtract(1, 'day').format(transaction_opt).toString()

const [total, setTotal] = useState();
  
  
  // useEffect(() => {
  //   axios.get('/api/get-monthly-transactions').then((res) => {
  //     console.log(res.data)
  //     setTotal(res.data)
  //   })
  // }, []);


  


const data = [
    {
        name: now.subtract(7, 'day').format(options),
        gain: total ? total.seven_days_ago.gain : 0,  
        loss: total ? total.seven_days_ago.expense : 0
      },
      {
        name: now.subtract(6, 'day').format(options),
        gain: total ? total.six_days_ago.gain : 0,
        loss: total ? total.six_days_ago.expense : 0
      },
      {
        name: now.subtract(5, 'day').format(options),
        gain: total ? total.five_days_ago.gain : 0,
        loss: total ? total.five_days_ago.expense : 0
      },
      {
        name: now.subtract(4, 'day').format(options),
        gain: total ? total.four_days_ago.gain : 0,
        loss: total ? total.four_days_ago.expense : 0
      },
      {
        name: now.subtract(3, 'day').format(options),
        gain: total ? total.three_days_ago.gain : 0,
        loss: total ? total.three_days_ago.expense : 0
      },
      {
        name: now.subtract(2, 'day').format(options),
        gain: total ? total.two_days_ago.gain : 0,
        loss: total ? total.two_days_ago.expense : 0
      },
      {
        name: now.subtract(1, 'day').format(options),
        gain: total ? total.yesterday.gain : 0,
        loss: total ? total.yesterday.expense : 0
      }, 
]

const dummydata = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]
 
    
         return (
             <ResponsiveContainer width='100%' height='100%'>
                 <LineChart
                    width={500}
                    height={500}
                    data={dummydata}
                    margin={{
                        top: 0, 
                        right: 10, 
                        left: 0, 
                        bottom: 0,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="rgb(0, 0, 0, 0.4)" tickLine={false}/>
                        <YAxis tickLine={false} stroke="rgb(0, 0, 0, 0.4)"/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey='pv' stroke="#8884d8" activeDot={{ r:8 }} />
                        <Line type="monotone" dataKey='uv' stroke="#82ca9d" />
                    </LineChart>
             </ResponsiveContainer>
         );
     }
