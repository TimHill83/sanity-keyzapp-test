export default {
      name: "emailTemplate",
      title: "Email",
      type: "document",
      fields: [
          {
              title: "Title",
              name: "title",
              description: "An internal title for this email",
              type: "string",
          },
          {
          title: "Content",
          name: "content",
              type: "array",
              of: [
                  { type: "titleBlock" },
                  { type: "textSection" },
              ]
          },
        
      ]
    }