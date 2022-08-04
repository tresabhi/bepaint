import { noDocs } from '../utilities/noDocs';
import FontSizes from './DocumentFontSizes.svelte';

export default {
  ...noDocs,
  title: 'FontSizes/Document',
  component: FontSizes,
};

const Template = (args) => ({
  Component: FontSizes,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
