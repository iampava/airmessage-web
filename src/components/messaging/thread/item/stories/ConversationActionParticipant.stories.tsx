import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConversationActionParticipantComponent from "../ConversationActionParticipant";
import { ConversationItemType, ParticipantActionType } from "shared/data/stateCodes";

const meta: Meta<typeof ConversationActionParticipantComponent> = {
  title: "components/messaging/thread",
  component: ConversationActionParticipantComponent,
};

export default meta;
type Story = StoryObj<typeof ConversationActionParticipantComponent>;

export const ConversationActionParticipant: Story = {
  args: {
    action: {
        date: new Date(),
        type: ParticipantActionType.Join,
        itemType: ConversationItemType.ParticipantAction,
        user: "Jon Doe",
        serverID: 123,
        chatGuid: "guid",
        chatLocalID: 22,
        guid: "guid",
        localID: 12,
        target: "Phil",
    }
  }
};
