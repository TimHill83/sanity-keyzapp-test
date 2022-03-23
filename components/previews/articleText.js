import React from "react";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TiWarningOutline } from "react-icons/ti";

export const NoteStyle = (props) => (
  <div
    style={{
      backgroundColor: "#b2e1f6", //kz-blue-200
      padding: "0.25em",
      borderRadius: "0.25em",
    }}
  >
    <span style={{ pointerEvents: "none", fontWeight: "bold" }}>
      <MdOutlineStickyNote2 style={{ marginLeft: "0.25em", marginRight: "0.25em" }} />
      {"Note: "}
    </span>
    {props.children}
  </div>
);

export const TipStyle = (props) => (
  <div
    style={{
      backgroundColor: "#fef08a", //yellow-200
      padding: "0.25em",
      borderRadius: "0.25em",
    }}
  >
    <span style={{ pointerEvents: "none", fontWeight: "bold" }}>
      <HiOutlineLightBulb style={{ marginLeft: "0.25em", marginRight: "0.25em" }} />
      {"Tip: "}
    </span>
    {props.children}
  </div>
);

export const WarningStyle = (props) => (
  <div
    style={{
      backgroundColor: "#fecaca", //red-200
      padding: "0.25em",
      borderRadius: "0.25em",
    }}
  >
    <span style={{ pointerEvents: "none", fontWeight: "bold" }}>
      <TiWarningOutline style={{ marginLeft: "0.25em", marginRight: "0.25em" }} />
      {"Warning: "}
    </span>
    {props.children}
  </div>
);
