import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const IndexGraph = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right:50, bottom: 50, left: 15 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '1000',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-$.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        axisLeft={null}
        enableArea={false}
        areaBaselineValue={0}
        enableGridX={false}
        enableGridY={false}
        enableSlices='x'
        pointSize={10}
        curve='linear'
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
)

export default IndexGraph