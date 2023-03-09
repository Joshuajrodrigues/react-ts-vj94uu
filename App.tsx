import * as React from 'react';
import './style.css';

export default function App() {
  const [curvedx, setCurvedx] = React.useState(0);
  const [curvedy, setCurvedy] = React.useState(0);

  const [curvedx2, setCurvedx2] = React.useState(0);
  const [curvedy2, setCurvedy2] = React.useState(0);

  const [startx, setStartx] = React.useState(0);
  const [endx, setEndx] = React.useState(0);
  const [starty, setStarty] = React.useState(0);
  const [endy, setEndy] = React.useState(0);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '12px',
        }}
      >
        startx{' '}
        <input
          max={1000}
          value={startx}
          type="range"
          onChange={(e) => setStartx(e.target.value)}
        />
        endx{' '}
        <input
          max={1000}
          value={endx}
          type="range"
          onChange={(e) => setEndx(e.target.value)}
        />
        starty{' '}
        <input
          max={1000}
          value={starty}
          type="range"
          onChange={(e) => setStarty(e.target.value)}
        />
        endy{' '}
        <input
          max={1000}
          value={endy}
          type="range"
          onChange={(e) => setEndy(e.target.value)}
        />
        dx {curvedx}{' '}
        <input
          max={1000}
          value={curvedx}
          type="range"
          onChange={(e) => setCurvedx(e.target.value)}
        />
        dy {curvedy}{' '}
        <input
          max={1000}
          value={curvedy}
          type="range"
          onChange={(e) => setCurvedy(e.target.value)}
        />
        dx2{' '}
        <input
          max={1000}
          value={curvedx2}
          type="range"
          onChange={(e) => setCurvedx2(e.target.value)}
        />
        dy2{' '}
        <input
          max={1000}
          value={curvedy2}
          type="range"
          onChange={(e) => setCurvedy2(e.target.value)}
        />
      </div>
      <div
        style={{
          margin: '24px',
          padding: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          <path
            id="curve"
            d={`M ${startx} ${endx} C ${curvedx} ${curvedy}, ${curvedx2} ${curvedy2}, ${starty} ${endy}`}
            //stroke="black"
            fill="transparent"
          />
          <text width="500">
            <textPath alignment-baseline="top" xlinkHref="#curve">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati eius natus animi, quod vitae sapiente fuga nihil.
              Facilis enim minima soluta.
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
