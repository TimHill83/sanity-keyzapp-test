//using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64

import React, { FC } from "react";
import { SanityDocument } from "@sanity/client";
import { withDocument } from "part:@sanity/form-builder";
import Spinner from "part:@sanity/components/loading/spinner";
import { WithReferringDocuments } from "part:@sanity/base/with-referring-documents";
import ReferringDocumentsList from "./ReferringDocumentsList";
import FormField from "part:@sanity/components/formfields/default";

// You'll need to type these properly
type Props = {
  referringDocuments: Record<string, any>[];
  isLoading: boolean;
  published?: SanityDocument | null;
};

const ReferencedBy: FC<Props> = React.forwardRef((props, ref) => {
  const { document, type } = props;

  // Access options from the schema definition
  // const { referenceType } = type.options;

  return (
    <FormField label="Referenced By" description="Documents which reference this document">
      <WithReferringDocuments id={document._id}>
        {({ referringDocuments, isLoading }) => {
          // Optional: Read options from the schema to filter by a specific type
          // const documents = referringDocuments.filter(
          //   (doc) => doc.type === referenceType
          // );

          if (isLoading) {
            return <Spinner message="Looking for referring documents…" />;
          }

          if (!referringDocuments.length) return null;

          return <ReferringDocumentsList documents={referringDocuments} />;
        }}
      </WithReferringDocuments>
    </FormField>
  );
});

export default withDocument(ReferencedBy);
