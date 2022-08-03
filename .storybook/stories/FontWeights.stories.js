import { noDocs } from '../utilities/noDocs';
import FontWeights from './FontWeights.svelte';

export default {
  ...noDocs,
  title: 'FontWeights/Default',
  component: FontWeights,
};

const Template = (args) => ({
  Component: FontWeights,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
