import React, { useState, useLayoutEffect, useRef } from "react";

function Progress() {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef();

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!articleRef.current) return;

      const { height } = articleRef.current.getBoundingClientRect();

      setProgress(window.scrollY / (height - window.innerHeight));
    };

    updateHeight();

    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  const position = Math.max(1 - progress, 0);
  const complete = position === 0;
  const notMoved = position === 1;
  const percent = Math.floor(progress*100); 

 
  const DIAMETER = 400;
  const STROKE_WIDTH = 50;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;

  return (
    <div className="App">
      <div className="article" ref={articleRef}>
        <div>
          <div 
          className="button"
          style={{
            position: "fixed",
            top: '50px',
            right: '50px',
            
          }}
          >
          {/* {complete ? "Completed"  : `${ percent}%` } */}
          </div>
          <button
            style={{
              position: "fixed",
            }}
          >
            {!notMoved && (
              <svg
                viewBox="0 0 400 400"
                className="circle-progress"
              >
                <circle
                  cx={DIAMETER / 2}
                  cy={DIAMETER / 2}
                  r={RADIUS}
                  stroke="tomato"
                  fill="transparent"
                  strokeWidth={STROKE_WIDTH}
                  style={{
                    strokeDasharray: CIRCUMFERENCE,
                    strokeDashoffset: CIRCUMFERENCE * position
                  }}
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <style jsx>{`

      .article {
        height: 600vh;
        background: linear-gradient(to bottom, #1e5799 0%, #7db9e8 100%);
      }

      button {
        width: 100%;
        height: 100%;
        max-width: 400px;
        max-height: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .circle-progress {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        max-width: 400px;
        max-height: 400px;
      }

    `}</style>
    </div>
  );
}

export default Progress;
