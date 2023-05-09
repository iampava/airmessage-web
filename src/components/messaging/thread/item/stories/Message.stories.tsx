import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageComponent from "../Message";
import { ConversationItemType, MessageModifierType, MessageStatusCode, TapbackType } from "shared/data/stateCodes";

const meta: Meta<typeof MessageComponent> = {
  title: "components/messaging/thread",
  component: MessageComponent,
};

export default meta;
type Story = StoryObj<typeof MessageComponent>;

export const Message: Story = {
  args: {
    flow: {
        anchorBottom: false,
        anchorTop: false,
        showDivider: true,
    },
    isGroupChat: true,
    showStatus: true,
    message: {
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        sender: "Jon Doe",
        attachments: [{
            name: "Cover.jpg",
            size: 1000,
            type: "image/png",
        }],
        itemType: ConversationItemType.Message,
        status: MessageStatusCode.Delivered,
        tapbacks: [{
            isAddition: true,
            sender: "Jon",
            tapbackType: TapbackType.Laugh,
            type: MessageModifierType.Sticker,
            messageIndex: 0,
            messageGuid: "guid",
        }, {
            isAddition: true,
            sender: "Jon",
            tapbackType: TapbackType.Like,
            type: MessageModifierType.Sticker,
            messageIndex: 0,
            messageGuid: "guid2",
        }],
        stickers: [],
        text: "This is a message",
    }
  }
};
