import React from 'react'
import ChartistGraph from 'react-chartist';
import styles from '../styles/sidepiechart.module.scss'

// Create a simple line chart
var data = {
    // A labels array that can contain any sort of values
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    // Our series array that contains series objects or in this case series data arrays
    series: [20, 10, 30, 40]
  };
  
// As options we currently only set a static size of 300x200 px
var options = {
  donut: false,
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


const SidePieChart = () => {
  return (
    <div>
        <ChartistGraph data={data} options={options} type={type}/> 
    </div>
  )
}

export default SidePieChart