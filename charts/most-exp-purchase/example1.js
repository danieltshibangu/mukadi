
import { ResponsiveTimeRange } from '@nivo/calendar'
import expData from './data';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MostExpensiveBuy = ({ data /* see data tab */ }) => (
    <ResponsiveTimeRange
        data={data}
        height={300}
        from="2018-08-05"
        to="2018-08-10"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        monthLegendOffset={0}
        weekdayLegendOffset={82}
        dayBorderWidth={1}
        dayBorderColor="#ffffff"
    />
)

export default MostExpensiveBuy;