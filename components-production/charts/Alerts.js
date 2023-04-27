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


const Alerts = () => {
    const deposits = 13;
    const purchases = 8;
    const moneySaved = 2;
    const overSpent = 1;

    const bardata = [
        {
          "title": "Deposits",
          "alertType": deposits,
        },
        {
          "title": "Purchases",
          "alertType": purchases,
        },
        {
          "title": "Saved",
          "alertType": moneySaved,
        },
        {
          "title": "Overspent",
          "alertType": overSpent,
        }
    ]

    return (
        <ResponsiveBar
            //colors={['#4991fd', '#5d9dfd', '#72aafe', '#86b6fe', '#9ac2fe', '#aecefe', '#c2dafe' ]}
            colors={['#FFC700', '#4991fd', '#FF896D', '#6ED47C' ]}
            colorBy='index'
            data={bardata}
            keys={[
                'alertType',
            ]}
            indexBy="title"
            margin={{ top: 30, right: 20, bottom: 30, left: 30 }}
            padding={0.2}
            borderWidth={1}
            enableLabel={false}
            minValue={0}
            groupMode="grouped"
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
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
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
}

export default Alerts