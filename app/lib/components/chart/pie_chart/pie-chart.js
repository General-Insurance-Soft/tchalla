'use client'

import React from "react";
import { useEffect, useRef } from "react";

import * as echarts from 'echarts';


export default function PieChart() {

    let pieChart = useRef(null);

    useEffect(() => {
        let myChart = echarts.init(pieChart.current);

        myChart.setOption({
            
            // title: {
            //     text: 'Referer of a Website',
            //     subtext: 'Fake Data',
            //     left: 'center'
            //   },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [{
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [{
                    value: 1048,
                    name: 'Milimani'
                  },
                  {
                    value: 735,
                    name: 'Naivasha'
                  },
                  {
                    value: 580,
                    name: 'Gilgil'
                  },
                  {
                    value: 484,
                    name: 'Lanet'
                  },
                  {
                    value: 300,
                    name: 'Racecourse'
                  }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }]
        });
    }, [])

    return (
        <>
            <div  ref={pieChart} style={{ minHeight: "400px" }} className="echart"></div>
        </>
    );
}
