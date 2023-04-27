// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Overspending = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.80}
        padAngle={0.7}
        cornerRadius={3}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        activeOuterRadiusOffset={0}
        colors={['#bdd6f5', 'rgb(0,0,0,0.07)']}
        
    />
)

export default Overspending