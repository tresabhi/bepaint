import IconSizes from './IconSizes.svelte';

export default {
  title: 'Sizes/Icon',
  component: IconSizes,
  argTypes: {
    unit: {
      control: 'select',
      options: ['px', 'em', 'rem', 'in', 'cm', 'mm', 'pt', 'pc'],
    },
  },
};

const Template = (args) => ({
  Component: IconSizes,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  unit: 'rem',
};
