import React from 'react';

import { Dropdown } from '../components/Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/Dropdown',
    component: Dropdown,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />;

export const NotOpened = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotOpened.args = {
    label: "My dropdown",
    open: false
};

export const Opened = Template.bind({});
Opened.args = {
    label: 'Renders opened',
    open: true
};
