import type { Meta, StoryObj } from "@storybook/react";
import DetailErrorComponent from "../DetailError";
import { ConnectionErrorCode } from "shared/data/stateCodes";

const meta: Meta<typeof DetailErrorComponent> = {
  title: "components/messaging/details",
  component: DetailErrorComponent,
};

export default meta;
type Story = StoryObj<typeof DetailErrorComponent>;

export const DetailError: Story = {
  args: {
    error: ConnectionErrorCode.BadRequest
  }
};
