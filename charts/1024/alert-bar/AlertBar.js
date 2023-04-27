// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const colors = { 'hot dog': 'red'}
const getColor = bar => colors[bar.id]

const AlertBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        colors={['#4991fd', '#FF743C', '#6ED47C', '#ffc124' ]}
        colorBy='id'
        data={data}
        keys={[
            'overspending',
            'pending',
            'overdrawn',
            'decision'
        ]}
        indexBy="type"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        padding={0}
        layout='horizontal'
        borderWidth={1}
        innerPadding={5}
        enableLabel={false}
        groupMode="stacked"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
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
                opacity: 1,
                strokeWidth: 1,
                strokeDasharray: "4 4"
              }
            }
          }}
        
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

export default AlertBar