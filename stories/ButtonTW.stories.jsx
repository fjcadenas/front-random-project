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


export default story;
