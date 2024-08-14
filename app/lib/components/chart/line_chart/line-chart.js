'use client'

import React from "react";
import { useEffect, useRef } from "react";

import * as echarts from 'echarts';


export default function LineChart() {

    let lineChart = useRef(null);

    useEffect(() => {
        let myChart = echarts.init(lineChart.current);

        myChart.setOption({
            //color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Claims per region - Top 3'
            },
            legend: {
                data: ['Milimani', 'Race course', 'whitehouse']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['Jan - 24', 'Feb - 24', 'Mar - 24', 'APr - 24', 'May - 24']
            },
            yAxis: {},
            series: [
                {
                    data: [15, 25, 18, 9, 15, 20],
                    name: 'Milimani',
                    type: 'line',
                    // stack: 'Y',
                    "smooth": true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            // {offset: 0, color: '#2378f7'},
                            ])
                    }
                },
                {
                    data: [25, 15, 26, 5, 4, 3],
                    name: 'Race course',
                    type: 'line',
                    // stack: 'Y',
                    "smooth": true
                },
                {
                    data: [10, 20, 15, 12, 8, 4],
                    name: 'whitehouse',
                    type: 'line',
                    "smooth": true
                    // stack: 'x'
                }
            ]
        });
    }, [])

    return (
        <>
            <div id="lineChart" ref={lineChart} style={{ minHeight: "400px" }} className="echart"></div>
        </>
    );
}         