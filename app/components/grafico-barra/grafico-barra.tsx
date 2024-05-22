'use client'
import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

function BarChart() {

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    // Add data
    chart.data = [
      { "category": "Category 1", "value": 50 },
      { "category": "Category 2", "value": 60 },
      { "category": "Category 3", "value": 55 }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.name = "Sales";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;
    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 1;

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    return () => {
      chart.dispose();
    };

  }, []);

  return (
    <>
      <span className="material-symbols-outlined">
        chevron_left
      </span>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default BarChart;