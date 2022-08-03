import { noDocs } from '../utilities/noDocs';
import GoogleFonts from './GoogleFonts.svelte';

export default {
  ...noDocs,
  title: 'Fonts/Google',
  component: GoogleFonts,
  argTypes: {
    fontFamily: {
      name: 'Font Family',
      description: 'The font family that will be pulled from Google Fonts',
      control: 'text',
    },
  },
};

const Template = (args) => ({
  Component: GoogleFonts,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  fontFamily: 'Cursive',
};
