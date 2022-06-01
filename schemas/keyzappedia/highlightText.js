import React from "react";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { HiOutlineLightBulb, HiOutlinePencilAlt } from "react-icons/hi";
import { TiWarningOutline } from "react-icons/ti";
import { CgFormatText } from "react-icons/cg";
import basicText from "./fields/basicText";

function highlightText(props) {
  let textType = {
    name: "",
    color: "#cccccc", //kz-blue-200
    icon: null,
  };

  switch (
    props.value.title // textType
  ) {
    case "note":
      textType = {
        name: "Note",
        color: "#b2e1f6", //kz-blue-200
        icon: MdOutlineStickyNote2,
      };
      break;
    case "tip":
      textType = {
        name: "Tip",
        color: "#fef08a", //yellow-200
        icon: HiOutlineLightBulb,
      };
      break;
    case "warning":
      textType = {
        name: "Warning",
        color: "#fecaca", //red-200
        icon: TiWarningOutline,
      };
      break;
    case "example":
      textType = {
        name: "Example",
        color: "#e2e8f0", //slate-200
        icon: HiOutlinePencilAlt,
      };
      break;
  }

  const Icon = (props) => {
    const { icon } = props;
    if (!icon) {
      return null;
    }
    const TheIcon = icon;
    return <TheIcon style={props.style} />;
  };

  return (
    <div
      style={{
        backgroundColor: textType.color,
        padding: "0.25em",
        borderRadius: "0.25em",
      }}
    >
      <span style={{ pointerEvents: "none", fontWeight: "bold" }}>
        <Icon
          icon={textType.icon}
          style={{
            top: "0.125em",
            marginRight: "0.25em",
            position: "relative",
          }}
        ></Icon>
        {textType.name ? textType.name + ": " : ""}
      </span>
      {props.value.subtitle}
    </div>
  );
}

export default {
  name: "highlightText",
  type: "object",
  title: "Highlighted Text",
  description: "A block of text that allows for special formatting",
  icon: CgFormatText,
  fields: [
    {
      name: "textType",
      type: "string",
      options: {
        list: [
          { value: "note", title: "Note" },
          { value: "tip", title: "Tip" },
          { value: "warning", title: "Warning" },
          { value: "example", title: "Example" },
        ],
      },
    },

    {
      name: "text",
      title: "Text",
      ...basicText,
    },
  ],
  preview: {
    select: {
      title: "textType",
      text: "text",
    },
    prepare(selection) {
      const { title } = selection;
      // See Previewing Portable Text https://www.sanity.io/docs/previewing-block-content
      const text = (selection.text || []).find(
        (block) => block._type === "block"
      );
      return {
        title: title,
        subtitle: text
          ? text.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
      };
    },
    component: highlightText,
  },
};
