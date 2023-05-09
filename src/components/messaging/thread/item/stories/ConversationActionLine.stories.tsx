import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConversationActionLineComponent from "../ConversationActionLine";

const meta: Meta<typeof ConversationActionLineComponent> = {
  title: "components/messaging/thread",
  component: ConversationActionLineComponent,
};

export default meta;
type Story = StoryObj<typeof ConversationActionLineComponent>;

export const ConversationActionLine: Story = {
  args: {
    children: "Hello World",
  }
};
