import * as React from 'react';
import './style.css';

export default function App() {
  const [curvedx, setCurvedx] = React.useState(0);
  const [curvedy, setCurvedy] = React.useState(0);

  const [curvedx2, setCurvedx2] = React.useState(0);
  const [curvedy2, setCurvedy2] = React.useState(0);
  return (
    <div>
      dx {curvedx}{' '}
      <input type="range" onChange={(e) => setCurvedx(e.target.value)} />
      dy {curvedy}{' '}
      <input type="range" onChange={(e) => setCurvedy(e.target.value)} />
      dx2 <input type="range" onChange={(e) => setCurvedx2(e.target.value)} />
      dy2 <input type="range" onChange={(e) => setCurvedy2(e.target.value)} />
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path
          id="curve"
          d={`M 10 10 C ${curvedx} ${curvedy}, ${curvedx2} ${curvedy2}, 300 10`}
          //stroke="black"
          fill="transparent"
        />
        <text width="500">
          <textPath alignment-baseline="top" xlinkHref="#curve">
            Dangerous Curves Ahead
          </textPath>
        </text>
      </svg>
    </div>
  );
}
