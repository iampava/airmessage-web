import type { Meta, StoryObj } from "@storybook/react";
import SidebarComponent from "../Sidebar";
import { ConversationPreviewType } from "shared/data/stateCodes";

const meta: Meta<typeof SidebarComponent> = {
  title: "components/messaging/master",
  component: SidebarComponent,
};

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
  args: {
    conversations: [{
      guid: "uuid",
      localID: 12,
      name: "Barbecue",
      localOnly: false,
      preview: {
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        attachments: [],
        text: "Who's bringing meat?",
        type: ConversationPreviewType.Message,
      },
      members: [
        "Jon Doe",
        "Phil Daixtech"
      ],
      service: "service",
      unreadMessages: false
    }, {
      guid: "uuid2",
      localID: 13,
      name: "Birthday Party",
      localOnly: false,
      preview: {
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        attachments: [],
        text: "So we're meeting at 10?",
        type: ConversationPreviewType.Message,
      },
      members: [
        "Jon Doe",
        "Phil Daixtech",
        "Gary"
      ],
      service: "service",
      unreadMessages: false
    }]
  }
};
