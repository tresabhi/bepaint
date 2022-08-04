import { noDocs } from '../utilities/noDocs';
import BorderWidths from './BorderWidths.svelte';

export default {
  ...noDocs,
  title: 'BorderWidths/Default',
  component: BorderWidths,
};

const Template = (args) => ({
  Component: BorderWidths,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
