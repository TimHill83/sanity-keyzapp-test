export default {
  name: "textSection",
  title: "Text Section",
  description:
    "A Basic Rich Text Document",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
        {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'}
      ],
        }
      ],
      

    },
  ],
};
