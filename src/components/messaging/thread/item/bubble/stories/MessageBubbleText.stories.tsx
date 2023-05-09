import React, { useEffect, useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import MessageBubbleTextComponent from "../MessageBubbleText";
import { MessageModifierType } from "shared/data/stateCodes";

const meta: Meta<typeof MessageBubbleTextComponent> = {
    title: "components/messaging/bubble",
  component: MessageBubbleTextComponent,
};

export default meta;
const Template: StoryFn<typeof MessageBubbleTextComponent> = (args) => {
    const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);
    useEffect(() => {
        fetch("https://picsum.photos/25/25")
            .then(resp => resp.blob())
            .then((respBlob: Blob) => respBlob.arrayBuffer())
            .then((arrayBuffer) => setArrayBuffer(arrayBuffer))
    }, []);

    if (!arrayBuffer) {
        return <> loading </>;
    }

    return (
        <MessageBubbleTextComponent {...args} stickers={[{
            data: arrayBuffer,
            dataType: "jpg",
            date: new Date(),
            messageGuid: "guid",
            messageIndex: 0,
            sender: "Joe",
            type: MessageModifierType.Sticker
        }]} />
    )
};

export const MessageBubbleText = Template.bind({});
MessageBubbleText.args = {
    flow: {
        anchorBottom: true,
        backgroundColor: "action.light",
        color: "action.main",
        isOutgoing: false,
        isUnconfirmed: true,
        anchorTop: false
    },
    text: "text",
    tapbacks: [],
};
