import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DetailThreadComponent from "../DetailThread";
import { ConversationPreviewType } from "shared/data/stateCodes";

const meta: Meta<typeof DetailThreadComponent> = {
  title: "components/messaging/thread",
  component: DetailThreadComponent,
};

export default meta;
type Story = StoryObj<typeof DetailThreadComponent>;

export const DetailThread: Story = {
  args: {
    conversation: {
        guid: "guid",
        localID: 123,
        localOnly: false,
        unreadMessages: true,
        service: "iMessage",
        preview: {
            date: new Date(),
            attachments: [],
            type: ConversationPreviewType.Message,
        },
        members: ["Jon Doe", "Bill Smith"],
    }
  }
};
