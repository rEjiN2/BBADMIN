// ChartComponent.js
"use client"
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
            x: {
              grid: {
                display: false, 
              },
            },
            y: {
              grid: {
                display: false, 
              },
            },
          },
          plugins: {
            legend: {
              display: false, 
            },
          },
      },
    });

    return () => {
      myChart.destroy(); 
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
