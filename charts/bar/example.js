// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
        ]}
        indexBy="country"
        margin={{ top: 0, right: 50, bottom: 30, left: 60 }}
        padding={0.3}
        enableLabel={false}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
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
                opacity: 0.25,
                strokeWidth: 1,
                strokeDasharray: "4 4"
              }
            }
          }}
        
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
            tickValues: 4,
        }}
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

export default MyResponsiveBar