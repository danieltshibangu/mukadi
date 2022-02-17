import ChartistGraph from 'react-chartist';
import React from 'react';
import styles from '../styles/riskmeter.module.scss'


// Create a simple line chart
var data = {
    // A labels array that can contain any sort of values
    labels: [1, 2, 3, 4],
    // Our series array that contains series objects or in this case series data arrays
    series: [20, 10, 30, 40]
  };
  
// As options we currently only set a static size of 300x200 px
var options = {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: 200,
    showLabel: false,
    padding: 0
};
  
var type = 'Pie'

  
const RiskMeter = () => {
  return (
  <div className={styles['gauge-container']}>
    <ChartistGraph 
            data={data} 
            options={options} 
            type={type} 
            className={styles['riskMeter']}
        />
  </div>
  );
};

export default RiskMeter;
  