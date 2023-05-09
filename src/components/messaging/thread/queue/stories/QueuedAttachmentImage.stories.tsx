import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { QueuedAttachmentImage as QueuedAttachmentImageComponent } from "../QueuedAttachmentImage";

const meta: Meta<typeof QueuedAttachmentImageComponent> = {
  title: "components/messaging/queue",
  component: QueuedAttachmentImageComponent,
};

export default meta;
type Story = StoryObj<typeof QueuedAttachmentImageComponent>;

export const QueuedAttachmentImage: Story = {
  args: {
    queueData: {
        file: new File(["https://iampava.com/images/pava.jpg"], "filename"),
        onRemove: () => {},
    }
  }
};
