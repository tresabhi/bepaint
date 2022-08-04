import { noDocs } from '../utilities/noDocs';
import Radii from './Radii.svelte';

export default {
  ...noDocs,
  title: 'Radii/Default',
  component: Radii,
};

const Template = (args) => ({
  Component: Radii,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
