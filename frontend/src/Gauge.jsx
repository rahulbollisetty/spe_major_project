import React from 'react'

import GaugeChart from 'react-gauge-chart';

const Gauge = ({ value }) => {


  const gradient = ["#e41414", "#f05200", "#f87a00", "#fd9e00", "#ffc000", "#f6d000", "#eae000", "#dbf000", "#bdf100", "#9af100", "#6ef100", "#18f013"];

  return (
    <div style={{ width: '500px' }}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={12}
        arcPadding={0.02}
        cornerRadius={3}
        textColor="#000000"
        needleColor="#000000"
        needleBaseColor="#000000"
        colors={gradient} // Use the gradient as arcColor
        percent={value}
      >
      </GaugeChart>
     
    </div>
  );
};

export default Gauge;
