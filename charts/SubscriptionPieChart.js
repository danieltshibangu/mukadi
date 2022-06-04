import ChartistGraph from 'react-chartist';
import React from 'react';
import styles from '../styles/charts/subscriptionpie.module.css'


// Create a simple line chart
var data = {
    // A labels array that can contain any sort of values
    // Our series array that contains series objects or in this case series data arrays
    series: [10, 90]
  };
  
// As options we currently only set a static size of 300x200 px
var options = {
  donut: true,
  donutWidth: 30,
  donutSolid: true,
  startAngle: 0,
  chartPadding: 0,
  showLabel: false,
  classNames: {
      chart: 'ct-chart-line',
      label: styles['ct-label'],
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: styles['ct-line'],
      point: styles['ct-point'],
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
  }
};
  
var type = 'Pie'

  
const SubscriptionPieChart = () => {
  return (
  <div style={{ height: '100%'}}>
    <ChartistGraph 
            data={data} 
            options={options} 
            type={type} 
            className={styles['progress-donut']}
            style={{height: '100%', width: '100%'}}

        />
  </div>
  );
};

export default SubscriptionPieChart;