import type { Meta, StoryObj } from "@storybook/react";
import DetailCreateSelectionChipComponent from "../DetailCreateSelectionChip";

const meta: Meta<typeof DetailCreateSelectionChipComponent> = {
  title: "components/messaging/create",
  component: DetailCreateSelectionChipComponent,
};

export default meta;
type Story = StoryObj<typeof DetailCreateSelectionChipComponent>;

export const DetailCreateSelectionChip: Story = {
  args: {
    selection: {
        name: "Jon Doe",
        avatar: "https://picsum.photos/200/200",
        address: "St. Hill no 8",
        displayAddress: "St. Hill no 8, California",
        addressLabel: "Home"
    },
    allSelections: [{
        name: "Jon Doe",
        avatar: "https://picsum.photos/200/200",
        address: "St. Hill no 8",
        displayAddress: "St. Hill no 8, California",
        addressLabel: "Home"
    }, {
        name: "Phil Daixtech",
        avatar: "https://picsum.photos/200/200",
        address: "Roadrunner Alley, No 12",
        displayAddress: "Roadrunner Alley, No 12 Texas",
        addressLabel: "Work"
    }]
  }
};
