import React from "react";

const Line = () => {
	const strokeWidth = 10; // Initial thickness
	const lineLength = 500; // Total length of the line

          const styles = {
                    transform: 'rotate(90deg)'
          }
	return (
		<svg style={styles}  width={lineLength} height={strokeWidth}>
			<line
				x1={0}
				y1={strokeWidth / 0.3}
				x2={lineLength}
				y2={strokeWidth / 1 }
				stroke="black"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
};

export default Line;
