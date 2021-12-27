//using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64

import React from 'react';
import Preview from 'part:@sanity/base/preview';
import { IntentLink } from 'part:@sanity/base/router';
import schema from 'part:@sanity/base/schema';
import {
  Item as DefaultItem,
  List as DefaultList,
} from 'part:@sanity/components/lists/default';
import styles from './ReferringDocumentsList.css';

const ReferringDocumentsList = (props) => {
  const { documents } = props;
  return (
    <DefaultList className={styles.root}>
      {documents.map((document) => {
        const schemaType = schema.get(document._type);
        return (
          <DefaultItem key={document._id} className={styles.item}>
            {schemaType ? (
              <IntentLink
                className={styles.link}
                intent="edit"
                params={{ id: document._id, type: document._type }}
              >
                <Preview value={document} type={schemaType} />
              </IntentLink>
            ) : (
              <div>
                A document of the unknown type <em>{document._type}</em>
              </div>
            )}
          </DefaultItem>
        );
      })}
    </DefaultList>
  );
};

export default ReferringDocumentsList;