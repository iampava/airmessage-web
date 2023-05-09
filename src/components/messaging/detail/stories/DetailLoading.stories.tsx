import type { Meta, StoryObj } from "@storybook/react";
import DetailLoadingComponent from "../DetailLoading";

const meta: Meta<typeof DetailLoadingComponent> = {
  title: "components/messaging/details",
  component: DetailLoadingComponent,
};

export default meta;
type Story = StoryObj<typeof DetailLoadingComponent>;

export const DetailLoading: Story = {
  args: {}
};
