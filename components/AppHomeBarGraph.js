// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar, Bar} from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={[
            {
              "country": "AD",
              "hot dog": 170,
              "hot dogColor": "hsl(71, 70%, 50%)",
              "burger": 126,
              "burgerColor": "hsl(18, 70%, 50%)",
              "sandwich": 73,
              "sandwichColor": "hsl(259, 70%, 50%)",
              "kebab": 149,
              "kebabColor": "hsl(21, 70%, 50%)",
              "fries": 34,
              "friesColor": "hsl(187, 70%, 50%)",
              "donut": 6,
              "donutColor": "hsl(228, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 133,
              "hot dogColor": "hsl(74, 70%, 50%)",
              "burger": 41,
              "burgerColor": "hsl(160, 70%, 50%)",
              "sandwich": 129,
              "sandwichColor": "hsl(54, 70%, 50%)",
              "kebab": 74,
              "kebabColor": "hsl(84, 70%, 50%)",
              "fries": 132,
              "friesColor": "hsl(175, 70%, 50%)",
              "donut": 2,
              "donutColor": "hsl(294, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 149,
              "hot dogColor": "hsl(63, 70%, 50%)",
              "burger": 199,
              "burgerColor": "hsl(192, 70%, 50%)",
              "sandwich": 69,
              "sandwichColor": "hsl(58, 70%, 50%)",
              "kebab": 170,
              "kebabColor": "hsl(58, 70%, 50%)",
              "fries": 112,
              "friesColor": "hsl(230, 70%, 50%)",
              "donut": 183,
              "donutColor": "hsl(73, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 111,
              "hot dogColor": "hsl(313, 70%, 50%)",
              "burger": 63,
              "burgerColor": "hsl(299, 70%, 50%)",
              "sandwich": 151,
              "sandwichColor": "hsl(28, 70%, 50%)",
              "kebab": 102,
              "kebabColor": "hsl(316, 70%, 50%)",
              "fries": 180,
              "friesColor": "hsl(281, 70%, 50%)",
              "donut": 135,
              "donutColor": "hsl(307, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 19,
              "hot dogColor": "hsl(331, 70%, 50%)",
              "burger": 44,
              "burgerColor": "hsl(116, 70%, 50%)",
              "sandwich": 145,
              "sandwichColor": "hsl(138, 70%, 50%)",
              "kebab": 26,
              "kebabColor": "hsl(263, 70%, 50%)",
              "fries": 182,
              "friesColor": "hsl(98, 70%, 50%)",
              "donut": 138,
              "donutColor": "hsl(309, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 142,
              "hot dogColor": "hsl(216, 70%, 50%)",
              "burger": 88,
              "burgerColor": "hsl(54, 70%, 50%)",
              "sandwich": 27,
              "sandwichColor": "hsl(14, 70%, 50%)",
              "kebab": 198,
              "kebabColor": "hsl(121, 70%, 50%)",
              "fries": 31,
              "friesColor": "hsl(65, 70%, 50%)",
              "donut": 8,
              "donutColor": "hsl(252, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 32,
              "hot dogColor": "hsl(5, 70%, 50%)",
              "burger": 151,
              "burgerColor": "hsl(79, 70%, 50%)",
              "sandwich": 9,
              "sandwichColor": "hsl(355, 70%, 50%)",
              "kebab": 30,
              "kebabColor": "hsl(163, 70%, 50%)",
              "fries": 74,
              "friesColor": "hsl(106, 70%, 50%)",
              "donut": 157,
              "donutColor": "hsl(283, 70%, 50%)"
            }
          ]}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
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
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

import React from 'react'
import styles from '../styles/apphomebargraph.module.scss'

const AppHomeBarGraph = () => {
  return (
    <div className={styles['bar-container']}><MyResponsiveBar height={500} width={500}/></div>
  )
}

export default AppHomeBarGraph