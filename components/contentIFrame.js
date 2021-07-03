import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Flex, Text, Button, studioTheme, ThemeProvider } from "@sanity/ui";
import { CopyIcon, LeaveIcon } from "@sanity/icons";
import EmailPreview from "./emailPreview";

function Iframe({ document: sanityDocument, options }) {
  const { url } = options;
  const [displayContent, setdisplayContent] = useState(typeof url === "string" ? url : ``);
  const input = useRef();
  const { displayed } = sanityDocument;

  function handleCopy() {
    if (!input?.current) return;

    input.current.select();
    input.current.setSelectionRange(0, 99999);

    // eslint-disable-next-line react/prop-types
    document.execCommand("copy");
  }

  useEffect(() => {
    const getUrl = async () => {
      const resolveUrl = await url(displayed);

      setdisplayContent(resolveUrl);
    };

    if (!displayContent && displayed?._id) getUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!displayContent || typeof displayContent !== "string") {
    return <div style={{ padding: `1rem` }}>Loading...</div>;
  }

  return (
    <ThemeProvider theme={studioTheme}>
      <textarea
        style={{ position: `absolute`, pointerEvents: `none`, opacity: 0 }}
        ref={input}
        value={displayContent}
        readOnly
        tabIndex="-1"
      />
      <Flex direction="column" style={{ height: `100%` }}>
        <Flex
          style={{
            alignItems: `center`,
            borderBottom: `1px solid var(--card-border-color)`,
            padding: `0.5rem`,
            flexShrink: 0,
          }}
        >
          {/* <Text style={{ flex: 1 }} size={0}>
            {displayContent}
          </Text> */}
          <Button
            fontSize={[1]}
            icon={CopyIcon}
            style={{ marginLeft: `0.5rem` }}
            padding={[2]}
            text="Copy"
            tone="default"
            onClick={() => handleCopy()}
          />
          {/* <Button
            fontSize={[1]}
            icon={LeaveIcon}
            style={{ marginLeft: `0.5rem` }}
            padding={[2]}
            text="Open"
            tone="primary"
            onClick={() => window.open(displayContent)}
          /> */}
          {/* <Button
            fontSize={[1]}
            icon={LeaveIcon}
            style={{ marginLeft: `0.5rem` }}
            padding={[2]}
            text="Reload"
            tone="primary"
            onClick={() => {
              displayContent = url(displayed);
            }}
          /> */}
        </Flex>
        {/* <iframe
          type="text/html"
          title="preview"
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          dangerouslySetInnerHTML={{ __html: displayContent }}
        ></iframe> */}
        <object style={{ width: "100%", height: "100%" }} dangerouslySetInnerHTML={{ __html: displayContent }} />
      </Flex>
    </ThemeProvider>
  );
}

Iframe.propTypes = {
  document: PropTypes.shape({
    displayed: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }),
    }),
  }),
  options: PropTypes.shape({
    url: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
  }),
};

export default Iframe;
