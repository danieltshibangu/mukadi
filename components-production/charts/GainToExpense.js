// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine, Line } from '@nivo/line'
import { DotsItem, useTheme, linearGradientDef } from '@nivo/core'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';



const DashedSolidLine = ({ series, lineGenerator, xScale, yScale}) => {
    return series.map(({ id, data, color}, index) => (
        <path 
        key={id}
        d={lineGenerator(
            data.map((d) => ({
                x: xScale(d.data.x),
                y:yScale(d.data.y),
            }))
        )}
        fill="none"
        stroke={color}
        style={
            index % 2 === 0
            ? {
                // simulate line when dash stroke is even
                strokeDasharray: "5, 8", 
                strokeWidth: 3
                }
            : {
                //simulate line with solid stroke
                strokeWidth: 3,
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 30px 10px 50px;'
            }
        }
        />
    ))
}

function LastPoint({ points, ...props }) {
    const theme = useTheme()
    const shownPoints = points.slice(-1)

    console.log(points)
  
    //console.log(props.lineGenerator([{ x: 1, y: 100 }]))
  
    return (
      <g>
        {shownPoints.map((point) => (
          <DotsItem
            key={point.id}
            x={point.x}
            y={point.y}
            datum={point.data}
            symbol={props.pointSymbol}
            size={props.pointSize}
            color={point.color}
            
            borderWidth={props.pointBorderWidth}
            borderColor={point.borderColor}
            label={point.label}
            labelYOffset={props.pointLabelYOffset}
            theme={theme}
            />
        ))}
      </g>
    )
  }

const CustomPoint = (props) => {
  const { currentPoint, borderWidth, borderColor } = props;
  // it will show the current point
  if (currentPoint) {
    return (
      <g>
        <circle
          fill="#A8EEFF"
          r={16}
          strokeWidth={borderWidth}
          stroke={borderColor}
          fillOpacity={0.35}
          cx={currentPoint.x}
          cy={currentPoint.y}
        />
        <circle
          r={6}
          strokeWidth={"4"}
          stroke={"#1a6dfc"}
          fill={"#A8EEFF"}
          fillOpacity={0.85}
          cx={currentPoint.x}
          cy={currentPoint.y}
        />
      </g>
    );
  }
};

const Areas = ({
    series, areaGenerator, xScale, yScale,
  }) => series.map(({ id, data, color }, index) => (
    <path
      key={id}
      d={areaGenerator(
        data.map(d => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y),
        })),
      )}
      fill={index === 1 ? color : 'none'} 
      fillOpacity={0.05}
    />
  ));

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.




const GainToExpense = (props) => {

  const dataPointFormat = 'MMM D';
  let now = dayjs();
  let gainTotal = 0;
  let expensesTotal = 0;
  let max = 0;

 

    
  const testHandler = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getData = async () => {
        const data = await axios.get('/api/charts/spending-behavior')
        setResult(data.data)
        setLoading(false)
      }
      getData();
    }, []);

    if (loading) {
      return <div>Loading...</div>
    } else {
      return result
    }
  }
  
    const dateList = testHandler ? Object.values(testHandler()) : []
    if (dateList.length !== 0) {
      for (let i = 0; i < dateList.length; i++) {
        dateList[i]?.gain || 0 ? gainTotal += dateList[i].gain : gainTotal += 0;
        dateList[i]?.expense || 0 ? expensesTotal += dateList[i].expense : expensesTotal += 0
      }

      if (gainTotal > expensesTotal) {
        max = gainTotal
      } else {
        max = expensesTotal
      }
    }

    //console.log(max)

   

    const handleTotals = () => {
      if (dateList.length !== 0) {
        for (let i = 0; i < dateList.length; i++) {
          dateList[i]?.gain || 0 ? gainTotal += dateList[i].gain : gainTotal += 0;
          dateList[i]?.expense || 0 ? expensesTotal += dateList[i].expense : expensesTotal += 0
        }

        props.handleDataTotals(gainTotal, expensesTotal);
      }
    };

    handleTotals();

    



    const calc_data = [
      {
        "id": "gain",
        "color": "hsl(142, 70%, 50%)",
        "data": [
          {
            "x": now.subtract(7, 'day').format(dataPointFormat),
            "y":  dateList[0]?.gain || 0
          },
          {
            "x": now.subtract(6, 'day').format(dataPointFormat),
            "y":  dateList[1]?.gain || 0
          },
          {
            "x": now.subtract(5, 'day').format(dataPointFormat),
            "y": dateList[2]?.gain || 0
          },
          {
            "x": now.subtract(4, 'day').format(dataPointFormat),
            "y":  dateList[3]?.gain || 0
          },
          {
            "x": now.subtract(3, 'day').format(dataPointFormat),
            "y":   dateList[4]?.gain || 0
          },
          {
            "x": now.subtract(2, 'day').format(dataPointFormat),
            "y":  dateList[5]?.gain || 0
          },
          {
            "x": now.subtract(1, 'day').format(dataPointFormat),
            "y":  dateList[6]?.gain || 0
          },
        ]
      },
      {
        "id": "expense",
        "color": "hsl(359, 100%, 0%)",
        "data": [
          {
            "x": now.subtract(7, 'day').format(dataPointFormat),
            "y":  dateList[0]?.expense || 0
          },
          {
            "x": now.subtract(6, 'day').format(dataPointFormat),
            "y":  dateList[1]?.expense || 0
          },
          {
            "x": now.subtract(5, 'day').format(dataPointFormat),
            "y": dateList[2]?.expense || 0
          },
          {
            "x": now.subtract(4, 'day').format(dataPointFormat),
            "y":  dateList[3]?.expense || 0
          },
          {
            "x": now.subtract(3, 'day').format(dataPointFormat),
            "y":   dateList[4]?.expense || 0
          },
          {
            "x": now.subtract(2, 'day').format(dataPointFormat),
            "y":  dateList[5]?.expense || 0
          },
          {
            "x": now.subtract(1, 'day').format(dataPointFormat),
            "y":  dateList[6]?.expense || 0
          },
        ]
      },
  ]

  return (
      <ResponsiveLine
          pointSize={10}
          onChange={handleTotals}
          layers={
              [
              'grid',
              'axes',
              'areas',
              'lines',
              'crosshair',
              'slices',
              'mesh',
              'legends',
              'markers',
              ]}
          //control the appearance of grid lines
          theme={{
              
              fontSize: '0.8rem',
              fontFamily: 'Poppins',
              textColor: 'rgb(0, 0, 0, 0.5)',

              axis: {
              domain: {
                  line: {
                  },
              }
              },
              grid: {
              line: {
                  opacity: 0.3,
                  strokeWidth: 1,
                  strokeDasharray: "4 3"
              }
              }
          }}
          data={calc_data}
          margin={{ top: 0, right: 30, bottom: 30, left: 18 }}
          xScale={{ type: 'point' }}
          lineWidth={0.5}
          yScale={{
              type: 'linear',
              min: -50,
              max: max,
              maxValue: 'auto',
              stacked: false,
              reverse: false
          }}
          yFormat=" >-.2f"
          curve="cardinal"
          enableGridX={false}
          colors={['#4991fd', '#FF743C' ]}
          colorBy='id'
          enableSlices='x'
          axisTop={null}
          crosshairType='x'
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
          axisLeft={null}
          enablePoints={false}
          enableArea={true}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}

          defs={[
              // using helpers
              // will inherit colors from current element
              linearGradientDef('gradientA', [
                  { offset: 0, color: 'inherit' },
                  { offset: 100, color: 'inherit', opacity: 1 },
              ]),
              linearGradientDef('gradientB', [
                  { offset: 0, color: '#000' },
                  { offset: 100, color: 'inherit' },
              ],
              // you may specify transforms for your gradients, e.g. rotations and skews,
              // following the transform attribute format.
              // For instance here we rotate 90 degrees relative to the center of the object.
              {
                  gradientTransform: 'rotate(90 0.5 0.5)'
              }),
              // using plain object
              {
                  id: 'gradientC',
                  type: 'linearGradient',
                  colors: [
                      { offset: 0, color: '#faf047' },
                      { offset: 100, color: '#e4b400' },
                  ],
              },
          ]}
          // 2. defining rules to apply those gradients
          fill={[
              // match using object query
              { match: { id: 'gain' }, id: 'gradientA' },
              { match: { id: 'expense' }, id: 'gradientA' },
              // match using function
              // { match: d => d.id === 'vue', id: 'gradientB' },
              // match all, will only affect 'elm', because once a rule match,
              // others are skipped, so now it acts as a fallback
              { match: '*', id: 'null' },
          ]}
      />
  )
}

export default GainToExpense