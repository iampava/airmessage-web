import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MarkdownComponent from "../../Markdown";

const meta: Meta<typeof MarkdownComponent> = {
  title: "components/messaging/thread",
  component: MarkdownComponent,
};

export default meta;
type Story = StoryObj<typeof MarkdownComponent>;

export const Markdown: Story = {
  args: {
    markdown: `# Hello World
    
[Homepage](https://www.google.com)`
  },
};
