import React from 'react';

import { Button } from '../components/ButtonTW';

const story = {
  title: 'Example/ButtonTailwindCSS',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  template: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  template: 'secondary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  template: 'danger',
  label: 'Button',
};

export default story;
