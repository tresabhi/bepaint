import HeadingFontSizes from './HeadingFontSizes.svelte';

export default {
  title: 'FontSizes/Heading',
  component: HeadingFontSizes,
  argTypes: {
    coefficient: {
      name: 'Coefficient',
      description: 'How fast heading sizes decrease',
      control: 'number',
    },
    verticalIntercept: {
      name: 'Vertical Intercept',
      description: 'How big the initial heading size is',
      control: 'number',
    },
  },
};

const Template = (args) => ({
  Component: HeadingFontSizes,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  coefficient: -10,
  verticalIntercept: 32,
};
