import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import {Link} from "react-router-dom"
function BarGraph() {
    const data=[
        {
          "country": "AD",
          "hot dog": 86,
          "hot dogColor": "hsl(283, 70%, 50%)",
          "burger": 184,
          "burgerColor": "hsl(81, 70%, 50%)",
          "sandwich": 158,
          "sandwichColor": "hsl(201, 70%, 50%)",
          "kebab": 17,
          "kebabColor": "hsl(206, 70%, 50%)",
          "fries": 175,
          "friesColor": "hsl(337, 70%, 50%)",
          "donut": 85,
          "donutColor": "hsl(308, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 104,
          "hot dogColor": "hsl(209, 70%, 50%)",
          "burger": 108,
          "burgerColor": "hsl(162, 70%, 50%)",
          "sandwich": 29,
          "sandwichColor": "hsl(245, 70%, 50%)",
          "kebab": 161,
          "kebabColor": "hsl(6, 70%, 50%)",
          "fries": 75,
          "friesColor": "hsl(294, 70%, 50%)",
          "donut": 112,
          "donutColor": "hsl(109, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 71,
          "hot dogColor": "hsl(348, 70%, 50%)",
          "burger": 74,
          "burgerColor": "hsl(98, 70%, 50%)",
          "sandwich": 76,
          "sandwichColor": "hsl(128, 70%, 50%)",
          "kebab": 57,
          "kebabColor": "hsl(288, 70%, 50%)",
          "fries": 172,
          "friesColor": "hsl(137, 70%, 50%)",
          "donut": 192,
          "donutColor": "hsl(241, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 190,
          "hot dogColor": "hsl(260, 70%, 50%)",
          "burger": 39,
          "burgerColor": "hsl(271, 70%, 50%)",
          "sandwich": 6,
          "sandwichColor": "hsl(287, 70%, 50%)",
          "kebab": 65,
          "kebabColor": "hsl(293, 70%, 50%)",
          "fries": 98,
          "friesColor": "hsl(169, 70%, 50%)",
          "donut": 197,
          "donutColor": "hsl(360, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 51,
          "hot dogColor": "hsl(341, 70%, 50%)",
          "burger": 58,
          "burgerColor": "hsl(74, 70%, 50%)",
          "sandwich": 188,
          "sandwichColor": "hsl(316, 70%, 50%)",
          "kebab": 48,
          "kebabColor": "hsl(280, 70%, 50%)",
          "fries": 119,
          "friesColor": "hsl(80, 70%, 50%)",
          "donut": 132,
          "donutColor": "hsl(202, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 83,
          "hot dogColor": "hsl(29, 70%, 50%)",
          "burger": 48,
          "burgerColor": "hsl(261, 70%, 50%)",
          "sandwich": 3,
          "sandwichColor": "hsl(120, 70%, 50%)",
          "kebab": 105,
          "kebabColor": "hsl(104, 70%, 50%)",
          "fries": 42,
          "friesColor": "hsl(45, 70%, 50%)",
          "donut": 44,
          "donutColor": "hsl(71, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 79,
          "hot dogColor": "hsl(59, 70%, 50%)",
          "burger": 32,
          "burgerColor": "hsl(10, 70%, 50%)",
          "sandwich": 32,
          "sandwichColor": "hsl(36, 70%, 50%)",
          "kebab": 19,
          "kebabColor": "hsl(333, 70%, 50%)",
          "fries": 3,
          "friesColor": "hsl(205, 70%, 50%)",
          "donut": 92,
          "donutColor": "hsl(253, 70%, 50%)"
        }
      ]
    return (
        <div style={{position: "relative", width: "100%", height: "450px"}}>
        <p>bargraph</p>
        <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
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
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
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
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
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
    />
    <br/>
    <br/>
    <p>Back to login page <Link to="login">Login</Link></p>
        </div>
    )
}

export default BarGraph
