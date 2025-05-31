const config = {
  controlName: 'NAC Table',
  description: 'Editable Table for NAC',
  groupName: 'Elistec Form Controls',
  fallbackDisableSubmit: false,
  standardProperties: {
    readOnly: false,
    required: false,
    description: true
  },
  version: '1.0',
  properties: {
    collection: {
      type: 'string',
      title: 'JSON Data to be surfaced or displayed'
    },
    value: {
      type: 'string',
      title: 'Updated JSON',
      isValueField: true
    }
  }
};

export { config };
