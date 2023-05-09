import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConversationActionRenameComponent from "../ConversationActionRename";
import { ConversationItemType, ParticipantActionType } from "shared/data/stateCodes";

const meta: Meta<typeof ConversationActionRenameComponent> = {
  title: "components/messaging/thread",
  component: ConversationActionRenameComponent,
};

export default meta;
type Story = StoryObj<typeof ConversationActionRenameComponent>;

export const ConversationActionRename: Story = {
  args: {
    action: {
        date: new Date(),
        chatName: "Chat name",
        itemType: ConversationItemType.ChatRenameAction,
        user: "Jon Doe",
        serverID: 123,
        chatGuid: "guid",
        chatLocalID: 22,
        guid: "guid",
        localID: 12,
    }
  }
};
