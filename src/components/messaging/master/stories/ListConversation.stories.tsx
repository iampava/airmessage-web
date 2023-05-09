import type { Meta, StoryObj } from "@storybook/react";
import ListConversationComponent from "../ListConversation";
import { ConversationPreviewType } from "shared/data/stateCodes";

const meta: Meta<typeof ListConversationComponent> = {
  title: "components/messaging/master",
  component: ListConversationComponent,
};

export default meta;
type Story = StoryObj<typeof ListConversationComponent>;

export const ListConversation: Story = {
  args: {
    conversation: {
        guid: "uuid",
        localID: 12,
        name: "Barbecue",
        localOnly: false,
        preview: {
            date: new Date(Date.now() - 24 * 60 * 60 * 1000),
            attachments: [],
            text: "Preview text",
            type: ConversationPreviewType.Message,
        },
        members: [
            "Jon Doe",
            "Phil Daixtech"
        ],
        service: "service",
        unreadMessages: false
    }
  }
};
