import type { Meta, StoryObj } from "@storybook/react";
import CallNotificationOutgoingComponent from "../CallNotificationOutgoing";

const meta: Meta<typeof CallNotificationOutgoingComponent> = {
  title: "components/calling",
  component: CallNotificationOutgoingComponent,
};

export default meta;
type Story = StoryObj<typeof CallNotificationOutgoingComponent>;

export const CallNotificationOutgoing: Story = {
  args: {
    callee: "Jon Doe",
    loading: false
  }
};
