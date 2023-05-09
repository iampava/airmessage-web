import type { Meta, StoryObj } from "@storybook/react";
import DetailCreateAddressButtonComponent from "../DetailCreateAddressButton";
import { AddressType } from "shared/interface/people/peopleUtils";

const meta: Meta<typeof DetailCreateAddressButtonComponent> = {
  title: "components/messaging/create",
  component: DetailCreateAddressButtonComponent,
};

export default meta;
type Story = StoryObj<typeof DetailCreateAddressButtonComponent>;

export const DetailCreateAddressButton: Story = {
  args: {
    address: {
      type: AddressType.Email,
      value: "jon.doe@gmail.com",
      displayValue: "Jon Doe Address",
      label: "Friends"
    },
    selected: true
  }
};
