import React from 'react';

import { MyCustomButton } from '../components/MyCustomButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/My Custom Button',
    component: MyCustomButton,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MyCustomButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: "My text",
    disabled: false,
    large: false,
    rounded: false
};
