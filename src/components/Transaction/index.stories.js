import Transaction from '.'

export default {
  title: 'Example/Transaction',
  component: Transaction,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Income = {
  args: {
    transaction: {
      date: '2024-01-23',
      value: 10000,
      comment: 'Salary'
    },
  },
};


