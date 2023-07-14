// import React, { useState } from "react";

// const DraggableDot = ({ color, position, onMouseDown }) => (
//   <circle
//     cx={position.x}
//     cy={position.y}
//     r="10"
//     fill={color}
//     onMouseDown={onMouseDown}
//     style={{ cursor: "move" }}
//   />
// );

// const SelectableSquare = () => {
//   const [dotsPositions, setDotsPositions] = useState({
//     red: { x: 0, y: 0 },
//     blue: { x: 500, y: 0 },
//     green: { x: 0, y: 500 },
//     yellow: { x: 500, y: 500 },
//   });
//   const [dragging, setDragging] = useState(null);

//   const handleMouseDown = (color) => () => {
//     setDragging(color);
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   const handleMouseMove = (event) => {
//     if (dragging) {
//       const svgRect = event.currentTarget.getBoundingClientRect();
//       const x = event.clientX - svgRect.left;
//       const y = event.clientY - svgRect.top;

//       setDotsPositions((prev) => ({
//         ...prev,
//         [dragging]: { x, y },
//       }));
//     }
//   };

//   return (
//     <svg
//       width="500px"
//       height="500px"
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//     >
//       <polygon
//         points={`${dotsPositions.red.x},${dotsPositions.red.y}
//                  ${dotsPositions.blue.x},${dotsPositions.blue.y}
//                  ${dotsPositions.yellow.x},${dotsPositions.yellow.y}
//                  ${dotsPositions.green.x},${dotsPositions.green.y}`}
//         style={{ fill: "lightgrey" }}
//       />
//       {Object.entries(dotsPositions).map(([color, position]) => (
//         <DraggableDot
//           key={color}
//           color={color}
//           position={position}
//           onMouseDown={handleMouseDown(color)}
//         />
//       ))}
//     </svg>
//   );
// };

// export default SelectableSquare;
import React, { useRef, useState } from "react";

const SelectableSquare = () => {
  const [positions, setPositions] = useState([
    { id: 1, color: "red", x: 50, y: 50 },
    { id: 2, color: "blue", x: 350, y: 50 },
    { id: 3, color: "green", x: 350, y: 350 },
    { id: 4, color: "yellow", x: 50, y: 350 },
  ]);

  const svgRef = useRef(null);
  const moveListenerRef = useRef(null);

  const drag = (id) => (event) => {
    const point = svgRef.current.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const { x, y } = point.matrixTransform(
      svgRef.current.getScreenCTM().inverse()
    );

    const newPoints = positions.map((pos) => {
      if (pos.id === id) {
        return { ...pos, x, y };
      } else {
        return pos;
      }
    });

    setPositions(newPoints);
  };

  const handleMouseDown = (id) => () => {
    if (moveListenerRef.current) {
      document.removeEventListener("mousemove", moveListenerRef.current);
    }
    const moveListener = drag(id);
    moveListenerRef.current = moveListener;
    document.addEventListener("mousemove", moveListener);
  };

  const handleMouseUp = () => {
    if (moveListenerRef.current) {
      document.removeEventListener("mousemove", moveListenerRef.current);
      moveListenerRef.current = null;
    }
  };

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 400 400">
      <polygon
        points={positions.map((pos) => `${pos.x},${pos.y}`).join(" ")}
        fill="lightgrey"
      />
      {positions.map((pos) => (
        <circle
          key={pos.id}
          r="10"
          cx={pos.x}
          cy={pos.y}
          fill={pos.color}
          onMouseDown={handleMouseDown(pos.id)}
          onMouseUp={handleMouseUp}
        />
      ))}
    </svg>
  );
};

export default SelectableSquare;
