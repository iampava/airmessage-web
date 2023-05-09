import type { Meta, StoryObj } from "@storybook/react";
import { DetailFrame as DetailFrameComponent } from "../DetailFrame";

const meta: Meta<typeof DetailFrameComponent> = {
  title: "components/messaging/master",
  component: DetailFrameComponent,
};

export default meta;
type Story = StoryObj<typeof DetailFrameComponent>;

export const DetailFrame: Story = {
  args: {
    title: "Detail Frame",
  }
};
