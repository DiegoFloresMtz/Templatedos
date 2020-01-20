export const dParallaxData= [
  {
    start: "self",
    duration: '1000px',
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateX"
      },
      {
        startValue:1,
        endValue:.5,
        property:"opacity"
      },
      {
        startValue: 1,
        endValue:1.5  ,
        property: "scaleX"
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 2,
        property: "blur"
      }
    ]
  }
];
