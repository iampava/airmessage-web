import type { Meta, StoryObj } from "@storybook/react";
import ConnectionBannerComponent from "../ConnectionBanner";
import { ConnectionErrorCode } from "shared/data/stateCodes";

const meta: Meta<typeof ConnectionBannerComponent> = {
  title: "components/messaging/master",
  component: ConnectionBannerComponent,
};

export default meta;
type Story = StoryObj<typeof ConnectionBannerComponent>;

export const ConnectionBanner: Story = {
  args: {
    error: ConnectionErrorCode.BadRequest
  }
};
