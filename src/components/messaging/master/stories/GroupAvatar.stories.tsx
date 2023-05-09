import type { Meta, StoryObj } from "@storybook/react";
import GroupAvatarComponent from "../GroupAvatar";

const meta: Meta<typeof GroupAvatarComponent> = {
  title: "components/messaging/master",
  component: GroupAvatarComponent,
};

export default meta;
type Story = StoryObj<typeof GroupAvatarComponent>;

export const GroupAvatar: Story = {
  args: {
    members: [
        "Diana",
        "Alex",
        "Bob",
        "Lisa",
        "Jim"
    ]
  }
};
