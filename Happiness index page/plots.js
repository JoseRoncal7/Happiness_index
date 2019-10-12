// Create the Traces

var trace1 = {
    x: data.Happiness_score,
    y: data.Economic_freedom,
    mode: "markers",
    type: "scatter",
    name: "economic freedom",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  }

  var trace2 = {
    x: data.Happiness_score,
    y: data.GDP,
    mode: "markers",
    type: "scatter",
    name: "GDP ($)",
    marker: {
      color: "orange",
      symbol: "diamond-x"
    }
  };

  var trace3 = {
    x: data.Happiness_score,
    y: data.Life_expectancy,
    mode: "markers",
    type: "scatter",
    name: "life expectancy",
    marker: {
      color: "rgba(156, 165, 196, 1.0)",
      symbol: "cross"
    }
  };
  
  // Create the data array for the plot
  var data = [trace1,trace2,trace3];
  
  // Define the plot layout
  var layout = {
    title: "Countries Happiness Index ",
    xaxis: { title: "Happiness Score" },
    yaxis: { title: "Metric" }
  };
  
  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  