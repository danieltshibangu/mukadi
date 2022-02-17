import ChartistGraph from 'react-chartist';
import React from 'react';
import Chartist from 'chartist'
import styles from '../styles/homeappriskprogresspie.module.scss'


// Create a simple line chart
var data = {
    // A labels array that can contain any sort of values
    // Our series array that contains series objects or in this case series data arrays
    series: [20, 80]
  };
  
// As options we currently only set a static size of 300x200 px
var options = {
  donut: true,
  donutWidth: 5,
  donutSolid: true,
  startAngle: 270,
  
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

  
const HomeAppRiskProgressPie = () => {
  return (
  <div className={styles['progress-container']}>
    <ChartistGraph 
            data={data} 
            options={options} 
            type={type} 
            className={styles['progress-donut']}
            style={{ height: '10vh'}}
        />
  </div>
  );
};

export default HomeAppRiskProgressPie;
  