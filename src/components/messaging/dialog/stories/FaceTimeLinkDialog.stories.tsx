import type { Meta, StoryObj } from "@storybook/react";
import FaceTimeLinkDialogComponent from "../FaceTimeLinkDialog";

const meta: Meta<typeof FaceTimeLinkDialogComponent> = {
  title: "components/messaging/dialog",
  component: FaceTimeLinkDialogComponent,
};

export default meta;
type Story = StoryObj<typeof FaceTimeLinkDialogComponent>;

export const FaceTimeLinkDialog: Story = {
  args: {
    isOpen: true,
    link: "https://example.com"
  }
};
