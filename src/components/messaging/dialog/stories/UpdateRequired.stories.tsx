import type { Meta, StoryObj } from "@storybook/react";
import UpdateRequiredDialogComponent from "../UpdateRequiredDialog";

const meta: Meta<typeof UpdateRequiredDialogComponent> = {
  title: "components/messaging/dialog",
  component: UpdateRequiredDialogComponent,
};

export default meta;
type Story = StoryObj<typeof UpdateRequiredDialogComponent>;

export const UpdateRequiredDialog: Story = {
  args: {
    isOpen: true
  }
};
