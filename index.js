module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Full Bleed Panel',
  addFields: [{
    name: 'panelBackgroundImage',
    type: 'singleton',
    addLabel: 'Add background image',
    editLabel: 'Edit background image',
    widgetType: 'apostrophe-images',
    label: 'Background Image'
  },
  {
    type: 'range',
    name: 'maxHeight',
    label: 'Maximum Height (%)',
    help: 'You can use this to limit the height of your panel in case you don\'t want it to be full height.',
    def: 100,
    min: 0,
    max: 100,
    step: 5
  },
  {
    type: 'range',
    name: 'blurRadius',
    label: 'Blur Radius',
    help: 'How much to blur your background (if at all).',
    def: 0,
    min: 0,
    max: 20,
    step: 1
  },
  {
    type: 'range',
    name: 'brightness',
    label: 'Brightness',
    help: 'How much to brighten your background (if at all). 1 is normal brightness.',
    def: 1,
    min: 0,
    max: 2,
    step: 0.1
  },
  {
    name: 'filter',
    label: 'Filter to Apply',
    type: 'select',
    def: 'none',
    choices: [
      { label: '-- None --', value: 'none' },
      { label: 'Grayscale', value: 'grayscale' },
      { label: 'Invert', value: 'invert' },
      { label: 'Opacity', value: 'opacity' },
      { label: 'Saturate', value: 'saturate' },
      { label: 'Sepia', value: 'sepia' }
    ]
  },
  {
    type: 'range',
    name: 'filterStrength',
    help: 'If a filter is selected above, how strong would you like the effect to be?',
    label: 'Filter Strength (%)',
    def: 50,
    min: 0,
    max: 100,
    step: 1
  },
  {
    type: 'color',
    name: 'textColour',
    label: 'Text Colour',
    def: '#fefefe',
    help: 'Pick a colour for the text (normally light colours against dark backgrounds or vice versa will work best).'
  }
  ],
  arrangeFields:
    [
      {
        name: 'basics',
        label: 'Basics',
        fields: ['maxHeight', 'panelBackgroundImage', 'textColour']
      },
      {
        name: 'formatting',
        label: 'Advanced Formatting',
        fields: ['blurRadius', 'brightness', 'filter', 'filterStrength'],
        last: true
      }
    ],

  construct(self, options) {
    self.pushAsset('stylesheet', 'widget', { when: 'always' })
  }
};