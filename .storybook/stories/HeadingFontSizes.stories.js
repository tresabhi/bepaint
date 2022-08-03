import { noDocs } from '../utilities/noDocs';
import HeadingFontSizes from './HeadingFontSizes.svelte';

export default {
  ...noDocs,
  title: 'FontSizes/Heading',
  component: HeadingFontSizes,
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
