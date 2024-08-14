'use client'

import React from "react";
import { useEffect, useRef } from "react";

import * as echarts from 'echarts';


export default function BarChart() {

    let barChart = useRef(null);

    useEffect(() => {
        let myChart = echarts.init(barChart.current);

        myChart.setOption({
            //color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],

            xAxis: {
                type: 'category',
                data: ['2020', '2021', '2022', '2023', '2024']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [1200, 2000, 1500, 3000, 3200],
                    type: 'bar'
                },
                {
                    data: [1200, 2000, 1500, 3000, 3200],
                    // name: 'Milimani',
                    type: 'line',
                    // stack: 'Y',
                    "smooth": true,
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            // {offset: 0, color: '#2378f7'},
                        ])
                    }
                }
            ]
        });
    }, [])

    return (
        <>
            <div id="barChart" ref={barChart} style={{ minHeight: "400px" }} className="echart"></div>
        </>
    );
}         