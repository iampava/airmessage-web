import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import QueuedAttachmentComponent from "../QueuedAttachment";

const meta: Meta<typeof QueuedAttachmentComponent> = {
  title: "components/messaging/queue",
  component: QueuedAttachmentComponent,
};

export default meta;
type Story = StoryObj<typeof QueuedAttachmentComponent>;

export const QueuedAttachment: Story = {
  args: {
    children: "Queue",
    queueData: {
        file: new File(["123113"], "test.txt"),
        onRemove: () => {},
    }
  }
};
