import type { Meta, StoryObj } from "@storybook/react";
import DetailCreateDirectSendButtonComponent from "../DetailCreateDirectSendButton";

const meta: Meta<typeof DetailCreateDirectSendButtonComponent> = {
  title: "components/messaging/create",
  component: DetailCreateDirectSendButtonComponent,
};

export default meta;
type Story = StoryObj<typeof DetailCreateDirectSendButtonComponent>;

export const DetailCreateDirectSendButton: Story = {
  args: {
    address: "St. Hill, no 8",
  }
};
