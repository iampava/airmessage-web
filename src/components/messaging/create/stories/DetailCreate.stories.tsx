import type { Meta, StoryObj } from "@storybook/react";
import DetailCreateComponent from "../DetailCreate";

const meta: Meta<typeof DetailCreateComponent> = {
  title: "components/messaging/create",
  component: DetailCreateComponent,
};

export default meta;
type Story = StoryObj<typeof DetailCreateComponent>;

export const DetailCreate: Story = {
  args: {}
};
