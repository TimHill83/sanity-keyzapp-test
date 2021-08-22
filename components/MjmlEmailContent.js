import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
import * as EmailContentComponents from "./mjml";

//const EmailContentComponents = [];

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = EmailContentComponents[upperFirst(section._type)];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console
  return null;
}

function MjmlEmailContent(props) {
  const { emailContent } = props;
  console.log(emailContent);

  if (!emailContent) {
    console.error("Missing section");
    return (
      <mj-section>
        <mj-column>
          <mj-text>Missing sections</mj-text>
        </mj-column>
      </mj-section>
    );
  }

  return (
    <Fragment>
      {emailContent.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return (
            <mj-section key={section._key}>
              <mj-column>
                <mj-text>Missing section {section._type}</mj-text>
              </mj-column>
            </mj-section>
          );
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </Fragment>
  );
}

// Sections.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       _type: PropTypes.string,
//       _key: PropTypes.string,
//       section: PropTypes.instanceOf(PropTypes.object),
//     })
//   ),
// };

export default MjmlEmailContent;
