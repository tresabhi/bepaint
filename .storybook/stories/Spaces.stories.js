import { noDocs } from '../utilities/noDocs';
import Spaces from './Spaces.svelte';

export default {
  title: 'Spaces/Default',
  component: Spaces,
  ...noDocs,
};

const Template = (args) => ({
  Component: Spaces,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
