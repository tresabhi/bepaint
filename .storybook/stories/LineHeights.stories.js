import { noDocs } from '../utilities/noDocs';
import BorderWidths from './LineHeights.svelte';

export default {
  ...noDocs,
  title: 'LineHeights/Default',
  component: BorderWidths,
};

const Template = (args) => ({
  Component: BorderWidths,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
