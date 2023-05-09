import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageInputComponent from "../MessageInput";
import { ConversationPreviewType } from "shared/data/stateCodes";

const meta: Meta<typeof MessageInputComponent> = {
  title: "components/messaging/thread",
  component: MessageInputComponent,
};

export default meta;
type Story = StoryObj<typeof MessageInputComponent>;

export const MessageInput: Story = {
  args: {
    attachments: [{
        file: new File([], "file"),
        id: 12
    }],
    message: "Hello World",
    placeholder: "Type a message",
  }
};
