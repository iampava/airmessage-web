import type { Meta, StoryObj } from "@storybook/react";
import SignOutDialogComponent from "../SignOutDialog";

const meta: Meta<typeof SignOutDialogComponent> = {
  title: "components/messaging/dialog",
  component: SignOutDialogComponent,
};

export default meta;
type Story = StoryObj<typeof SignOutDialogComponent>;

export const SignOutDialog: Story = {
  args: {
    isOpen: true
  }
};
