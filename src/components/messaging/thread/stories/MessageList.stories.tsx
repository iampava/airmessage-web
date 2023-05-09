import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageListComponent from "../MessageList";
import { ConversationItemType, ConversationPreviewType, MessageStatusCode } from "shared/data/stateCodes";

const meta: Meta<typeof MessageListComponent> = {
  title: "components/messaging/thread",
  component: MessageListComponent,
};

export default meta;
type Story = StoryObj<typeof MessageListComponent>;

export const MessageList: Story = {
  args: {
    items: [{
        attachments: [],
        guid: "guid",
        status: MessageStatusCode.Read,
        date: new Date(),
        stickers: [],
        tapbacks: [],
        text: "Message",
        sender: "Bill Smith",
        itemType: ConversationItemType.Message,
    }, {
        attachments: [],
        guid: "guid",
        status: MessageStatusCode.Read,
        date: new Date(Date.now() - 60 * 60 * 1000),
        stickers: [],
        tapbacks: [],
        text: "Message 2",
        sender: "Jon Doe",
        itemType: ConversationItemType.Message,
    }, {
        attachments: [],
        guid: "guid",
        status: MessageStatusCode.Read,
        date: new Date(Date.now() - 60 * 60 * 1000),
        stickers: [],
        tapbacks: [],
        text: "Message 33",
        itemType: ConversationItemType.Message,
    }],
    conversation: {
        guid: "guid",
        localID: 12,
        members: ["Jon Doe", "Bill Smith"],
        service: "iMessage",
        name: "Conversation Name",
        preview: {
            date: new Date(),
            attachments: [],
            text: "Preview",
            type: ConversationPreviewType.Message,
        },
        unreadMessages: true,
        localOnly: false,
    },
    messageSubmitEmitter: {
        unsubscribe: () => {},
        subscribe: () => {},
    }
  },
};
