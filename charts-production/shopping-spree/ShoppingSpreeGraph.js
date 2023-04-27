// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/heatmap
import { ResponsiveHeatMap, HeatMap } from '@nivo/heatmap'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveHeatMap = ({ data /* see data tab */ }) => (
    <ResponsiveHeatMap
        data={data}
        margin={{ top: 30, right: 0, bottom: 30, left: 90 }}
        valueFormat=">-.2s"
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
        xInnerPadding={0.05}
        yInnerPadding={0.1}
        axisTop={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 0,
            tickPadding: 12,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'diverging',
            scheme: 'oranges',
            minValue: 0,
            maxValue: 10,
            divergeAt: 1
        }}
        emptyColor="#555555"
        borderRadius={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.8'
                ]
            ]
        }}
        legends={[]}
        hoverTarget="column"
        motionConfig="gentle"
    />
)

export default MyResponsiveHeatMap