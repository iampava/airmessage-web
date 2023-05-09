import React, { useEffect, useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import MessageBubbleImageComponent from "../MessageBubbleImage";

const meta: Meta<typeof MessageBubbleImageComponent> = {
    title: "components/messaging/bubble",
    component: MessageBubbleImageComponent,
};

export default meta;
const Template: StoryFn<typeof MessageBubbleImageComponent> = (args) => {
    const [blob, setBlob] = useState<Blob | null>(null);
    useEffect(() => {
        fetch("https://picsum.photos/200/300")
            .then(resp => resp.blob())
            .then(respBlob => setBlob(respBlob))
    }, [])

    if (!blob) {
        return <> loading </>;
    }

    return (
        <MessageBubbleImageComponent {...args} data={blob} />
    )
};

export const MessageBubbleImage = Template.bind({});
MessageBubbleImage.args = {
    name: "Bubble Image",
    flow: {
        anchorBottom: true,
        backgroundColor: "action.light",
        color: "action.main",
        isOutgoing: false,
        isUnconfirmed: true,
        anchorTop: false
    },
    stickers: [],
    tapbacks: [],
    type: "jpg"
};
