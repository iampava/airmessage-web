import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import QueuedAttachmentGenericComponent from "../QueuedAttachmentGeneric";

const meta: Meta<typeof QueuedAttachmentGenericComponent> = {
  title: "components/messaging/queue",
  component: QueuedAttachmentGenericComponent,
};

export default meta;
type Story = StoryObj<typeof QueuedAttachmentGenericComponent>;

export const QueuedAttachmentGeneric: Story = {
  args: {
    queueData: {
        file: new File([""], "filename"),
        onRemove: () => {},
    }
  }
};
