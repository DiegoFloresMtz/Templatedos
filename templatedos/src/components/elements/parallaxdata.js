const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: "rotate"
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity"
      }
    ]
  },
  {
    start: 350,
    duration: 300,
    properties: [
      {
        startValue: "#3cb99c",
        endValue: "rgba(50,50,200,0.8)",
        property: "backgroundColor"
      },
      {
        startValue: 0,
        endValue: 100,
        property: "translateY"
      },
      {
        startValue: 0.75,
        endValue: 1,
        property: "opacity"
      }
    ]
  },
  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 1.5,
        endValue: 2,
        property: "scale"
      },
      {
        startValue: 90,
        endValue: 0,
        property: "rotate"
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 20,
        property: "blur"
      }
    ]
  }
];
