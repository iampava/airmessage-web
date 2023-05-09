import type { Meta, StoryObj } from "@storybook/react";
import DetailCreateListSubheaderComponent from "../DetailCreateListSubheader";

const meta: Meta<typeof DetailCreateListSubheaderComponent> = {
  title: "components/messaging/create",
  component: DetailCreateListSubheaderComponent,
};

export default meta;
type Story = StoryObj<typeof DetailCreateListSubheaderComponent>;

export const DetailCreateListSubheader: Story = {
  args: {
    children: "A"
  }
};
