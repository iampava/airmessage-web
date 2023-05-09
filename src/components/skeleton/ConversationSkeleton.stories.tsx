import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConversationSkeletonComponent from "./ConversationSkeleton";

const meta: Meta<typeof ConversationSkeletonComponent> = {
  title: "components/skeleton",
  component: ConversationSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof ConversationSkeletonComponent>;

export const ConversationSkeleton: Story = {
  args: {}
};
