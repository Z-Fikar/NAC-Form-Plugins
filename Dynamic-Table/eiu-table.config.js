const config = {
  controlName: "Editable Table",
  description: "Editable Table for NAC",
  groupName: "Elistec Form Controls",
  fallbackDisableSubmit: true,
  iconUrl: "repeating-section",
  searchTerms: ["list", "table", "repeat", "section", "repeating section", "elistec", "eiu"],
  pluginAuthor: "Nintex, Zulfikar",
  standardProperties: {
    readOnly: true,
    required: false,
    description: true,
    visibility: true,
  },
  version: "1.0",
  properties: {
    collection: {
      type: "string",
      title: "JSON Source",
    },
    value: {
      type: "string",
      title: "Updated JSON",
      isValueField: true,
    },
    pageSize: {
      type: "integer",
      title: "Page Size",
    },
  },
};

export { config };
