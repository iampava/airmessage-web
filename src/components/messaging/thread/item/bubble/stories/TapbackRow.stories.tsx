import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import TapbackRowComponent from "../TapbackRow";
import { MessageModifierType, TapbackType } from "shared/data/stateCodes";

const meta: Meta<typeof TapbackRowComponent> = {
    title: "components/messaging/bubble",
    component: TapbackRowComponent,
};

export default meta;
const Template: StoryFn<typeof TapbackRowComponent> = (args) => (
    <div style={{ position: "relative" }}>
        <TapbackRowComponent {...args} />
    </div>
);

export const TapbackRow = Template.bind({});
TapbackRow.args = {
    tapbacks: [{
        isAddition: true,
        sender: "Jon",
        tapbackType: TapbackType.Laugh,
        type: MessageModifierType.Sticker,
        messageIndex: 0,
        messageGuid: "guid",
    }, {
        isAddition: true,
        sender: "Tim",
        tapbackType: TapbackType.Laugh,
        type: MessageModifierType.Sticker,
        messageIndex: 0,
        messageGuid: "guid2",
    }]
};
