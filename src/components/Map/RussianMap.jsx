/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from "react"
import PropTypes from "prop-types";
import "./map.scss";
import CITY_POINTS from "components/Map/cities";

import MapSvg from "components/Map/MapSvg";

// import './map.scss';

// const query = graphql`
//   query {
//     allPointsJson {
//       edges {
//         node {
//           x
//           y
//           label
//           labelEn
//           size
//           region
//           labelOffset
//         }
//       }
//     }
//     citiesJson {
//       BELARUS
//       CHERNOZEM
//       KAZAHSTAN
//       MOSCOW
//       PETERSBURG
//       PFO
//       SIBIR
//       SOUTH
//       TATARSTAN
//       URAL
//     }
//   }
// `;

const RussianMap = ({ onCitySelected, selectedCity }) => {
  const [selectedRegion, setSelectedRegion] = useState('MOSCOW');

  // const data = useStaticQuery(query);

  const points = CITY_POINTS.map(p => ({
    ...p,
    x: (p.x - 347) * 3.905 / 880 * 100,
    y: (p.y - 417) * 3.305 / 489 * 100,
  }));

  const getPointClass = (label, size) => {
    const baseClass = 'map-component__city-point';
    const highlightedClass = `${baseClass}--highlighted`;
    const shouldHighlight = false;

    return `${baseClass} ${shouldHighlight ? highlightedClass : ''}`;
  };

  return (
    <div className="map-component">
      <div className="map-component__map-overlay-container">
        {points.map(({ label, size, x, y }, index) => {
          // const sizeMultiplier = breakpoint.sm ? '4px' : '0.3vw';

          // const width = `calc(${size} * ${sizeMultiplier})`;
          const width = size;



          return (
            <div key={label} id={label} className={getPointClass(label, size)} style={{ width, height: width, top: `${y}%`, left: `${x}%`}}/>
          );
        })}

        {points.map(({ label, labelEn, size, x, y, labelOffset, labelOffsetX }, index) => {
          // const offset = breakpoint.sm ? `${labelOffset * 19}px` : `${labelOffset * 1.3}vw`;
          const offset = `${labelOffset * 1.3}vw`;
          const offsetX = `${(labelOffsetX || 0) * 1.3}vw`;

          return (
            <div
              key={label}
              style={{top: `calc(${y}% + ${offset})`, left: `calc(${x}% - 2vw + ${offsetX})`}}
              className={`map-component__city-label ${label === selectedCity ? 'map-component__city-label--selected' : ''}`}
              onClick={() => { onCitySelected(label) }}
            >
                {label}
            </div>
          )
        })}
      </div>
      <MapSvg selectedRegion={selectedRegion} onRegionSelected={(region) => setSelectedRegion(region)}/>
    </div>
  );
};

RussianMap.propTypes = {
  onCitySelected: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
};

export default RussianMap;
