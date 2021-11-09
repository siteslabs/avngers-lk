export const pieChart = {
  chart: {
    type: "pie",
    inverted: true,
  },
  title: {
    text: "Pie point CSS",
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  series: [
    {
      type: "pie",
      allowPointSelect: true,
      keys: ["name", "y", "selected", "sliced"],
      data: [
        ["Apples", 29.9, false],
        ["Pears", 71.5, false],
        ["Oranges", 106.4, false],
        ["Plums", 129.2, false],
        ["Bananas", 144.0, false],
        ["Peaches", 176.0, false],
        ["Prunes", 135.6, true, true],
        ["Avocados", 148.5, false],
      ],
      showInLegend: true,
    },
  ],
};

export const areasplineChart = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "Monthly Average Temperature",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar"],
  },
  series: [
    { name: "Jhon", data: [1, 2, 3] },
    { name: "Jane", data: [2, 4, 8] },
  ],
};

export const columnChart = {
  chart: {
    type: "column",
  },
  title: {
    text: "Monthly Average Temperature",
  },
  subtitle: {
    text: "Source: WorldClimate.com",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Temperature (°C)",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.4,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6,
      ],
    },
    {
      name: "London",
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
    },
  ],
};
