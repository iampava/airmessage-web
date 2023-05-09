import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TapbackChipComponent from "../TapbackChip";
import { TapbackType } from "shared/data/stateCodes";

const meta: Meta<typeof TapbackChipComponent> = {
    title: "components/messaging/bubble",
  component: TapbackChipComponent,
};

export default meta;
type Story = StoryObj<typeof TapbackChipComponent>;

export const TapbackChip: Story = {
  args: {
    count: 11,
    type: TapbackType.Laugh
  }
};
