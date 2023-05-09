import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MessageBubbleDownloadableComponent from "../MessageBubbleDownloadable";
import { MessageModifierType, TapbackType } from "shared/data/stateCodes";

const meta: Meta<typeof MessageBubbleDownloadableComponent> = {
  title: "components/messaging/bubble",
  component: MessageBubbleDownloadableComponent,
};

export default meta;
type Story = StoryObj<typeof MessageBubbleDownloadableComponent>;

export const MessageBubbleDownloadable: Story = {
  args: {
    flow: {
        anchorBottom: true,
        backgroundColor: "action.light",
        color: "action.main",
        isOutgoing: false,
        isUnconfirmed: true,
        anchorTop: false
    },
    data: new Blob(["data"]),
    size: 912112,
    name: "Data",
    tapbacks: [{
        isAddition: true,
        sender: "Jon",
        type: MessageModifierType.Sticker,
        messageIndex: 0,
        messageGuid: "guid",
        tapbackType: TapbackType.Laugh
    }],
    stickers: []
  }
};
