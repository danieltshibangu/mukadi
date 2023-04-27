// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine, Line } from '@nivo/line'
import { DotsItem, useTheme, linearGradientDef } from '@nivo/core'
import checkingTotalData from './data'
import { useEffect } from 'react';



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
const SavingsCalculator = ({ data }) => (
    <ResponsiveLine
        pointSize={10}
        markers={[
            {
            axis: 'y',
            value: 0,
            lineStyle: { stroke: '#000', strokeWidth: 0.5, strokeDasharray: "2, 5" },
            legendPosition: 'bottom-left',
            },
        ]}
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
                opacity: 0.15,
                strokeWidth: 1,
                strokeDasharray: "4 3"
              }
            }
          }}
        data={data}
        margin={{ top: 0, right: 30, bottom: 30, left: 18 }}
        xScale={{ type: 'point' }}
        lineWidth={0.5}
        yScale={{
            type: 'linear',
            min: 0,
            max: 500,
            maxValue: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        enableGridX={false}
        colors={['#4991fd', '#FF743C' ]}
        colorBy='id'
        enableSlices={false}
        axisTop={null}
        crosshairType='x'
        axisRight={null}
        axisBottom={null}
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
            { match: { id: 'current' }, id: 'gradientA' },
             { match: { id: 'calculated' }, id: 'gradientA' },
            // match using function
            // { match: d => d.id === 'vue', id: 'gradientB' },
            // match all, will only affect 'elm', because once a rule match,
            // others are skipped, so now it acts as a fallback
            { match: '*', id: 'null' },
        ]}
    />
)

export default SavingsCalculator