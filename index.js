"use strict";
exports.__esModule = true;
// Import stylesheets
require("./style.css");
var echarts = require("echarts");
// Write TypeScript code!
/*const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;*/
// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('main'));
// specify chart configuration item and data
var option = {
    tooltip: {
        show: false
    },
    backgroundColor: 'white',
    legend: {
        data: ['Activity interest', 'Activity currently skilled'],
        textStyle: {
            color: '#30373D'
        }
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#636F7D',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        radius: 100,
        indicator: [
            { name: 'C-Level-Reporting', max: 10 },
            { name: 'Requirements-Eng.', max: 10 },
            { name: 'Tech-Doc.', max: 10 },
            { name: 'Architecture', max: 10 },
            { name: 'Testing', max: 10 },
            { name: 'Backend-Dev.', max: 10 },
            { name: 'Frontend-Dev.', max: 10 },
            { name: 'Operation', max: 10 },
            { name: 'UI-Design', max: 10 },
            { name: 'Daily Support', max: 10 }
        ]
    },
    series: [
        {
            type: 'radar',
            areaStyle: { normal: {} },
            data: [
                {
                    value: [5, 8, 8, 10, 9, 10, 10, 5, 1, 1],
                    name: 'Activity interest',
                    itemStyle: {
                        color: '#B38837'
                    },
                    areaStyle: {
                        opacity: 0.5
                    }
                },
                {
                    value: [4, 8, 5, 7, 4, 6, 7, 4, 5, 4],
                    name: 'Activity currently skilled',
                    itemStyle: {
                        color: '#4975B3'
                    },
                    areaStyle: {
                        opacity: 0.5
                    }
                }
            ]
        }
    ]
};
// use configuration item and data specified to show chart
myChart.setOption(option);
window['printDiv'] = function (divID) {
    //Get the HTML of div
    var divElements = document.getElementById(divID).innerHTML;
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;
    //Reset the page's HTML with div's HTML only
    document.body.innerHTML =
        '<html><head><title></title><style>html, body { margin: 0; padding: 0} </style></head><body>' +
            divElements +
            '</body>';
    document.getElementById('main').removeAttribute('_echarts_instance_');
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
    setTimeout(function () {
        //Print Page
        window.print();
        //Restore orignal HTML
        document.body.innerHTML = oldPage;
        document.getElementById('main').removeAttribute('_echarts_instance_');
        myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option);
    }, 500);
};
