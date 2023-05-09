import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SidebarBannerComponent from "../SidebarBanner";
import { Contacts } from "@mui/icons-material";

const meta: Meta<typeof SidebarBannerComponent> = {
  title: "components/messaging/master",
  component: SidebarBannerComponent,
};

export default meta;
type Story = StoryObj<typeof SidebarBannerComponent>;

export const SidebarBanner: Story = {
  args: {
    message: "Banner message",
    icon: <Contacts />,
    button: "Go!"
  }
};
