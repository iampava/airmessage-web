import type { Meta, StoryObj } from "@storybook/react";
import CallNotificationIncomingComponent from "../CallNotificationIncoming";

const meta: Meta<typeof CallNotificationIncomingComponent> = {
  title: "components/calling",
  component: CallNotificationIncomingComponent,
};

export default meta;
type Story = StoryObj<typeof CallNotificationIncomingComponent>;

export const CallNotificationIncoming: Story = {
  args: {
    caller: "Jon Doe",
    loading: false,
  }
};
