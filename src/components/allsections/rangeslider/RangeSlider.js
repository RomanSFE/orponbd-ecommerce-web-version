import React from 'react';
import { useRanger } from "react-ranger";

export default function RangeSlider() {
    const [values, setValues] = React.useState([300, 3000]);

  const { getTrackProps, handles } = useRanger({
    min: 100,
    max: 5000,
    stepSize: 20,
    values,
    onChange: setValues
  });

  return (
    <div className="RangeSlider">
      <h1>Multi-Range</h1>
      <br />
      <br />
      <div
        {...getTrackProps({
          style: {
            height: "4px",
            background: "#ddd",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
            borderRadius: "2px"
          }
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: "14px",
                height: "14px",
                outline: "none",
                borderRadius: "100%",
                background: "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                border: "solid 1px #888"
              }
            })}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <pre
        style={{
          display: "inline-block",
          textAlign: "left"
        }}
      >
        <code>
          {JSON.stringify({
            values
          })}
        </code>
      </pre>
    </div>
    )
}
