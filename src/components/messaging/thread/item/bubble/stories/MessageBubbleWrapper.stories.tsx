import React, { useEffect, useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import MessageBubbleWrapperComponent from "../MessageBubbleWrapper";
import { MessageModifierType } from "shared/data/stateCodes";

const meta: Meta<typeof MessageBubbleWrapperComponent> = {
    title: "components/messaging/bubble",
  component: MessageBubbleWrapperComponent,
};

export default meta;
const Template: StoryFn<typeof MessageBubbleWrapperComponent> = (args) => {
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
        <MessageBubbleWrapperComponent {...args} stickers={[{
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

export const MessageBubbleWrapper = Template.bind({});
MessageBubbleWrapper.args = {
    flow: {
        anchorBottom: true,
        backgroundColor: "action.light",
        color: "action.main",
        isOutgoing: false,
        isUnconfirmed: true,
        anchorTop: false
    },
    tapbacks: [],
    children: (
        <p> smth </p>
    )
};
