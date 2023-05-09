import React, { useEffect, useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import StickerStackComponent from "../StickerStack";
import { MessageModifierType } from "shared/data/stateCodes";

const meta: Meta<typeof StickerStackComponent> = {
    title: "components/messaging/bubble",
    component: StickerStackComponent,
};

export default meta;
const Template: StoryFn<typeof StickerStackComponent> = (args) => {
    const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);
    useEffect(() => {
        fetch("https://picsum.photos/25/25")
            .then(resp => resp.blob())
            .then((respBlob: Blob) => respBlob.arrayBuffer())
            .then((arrayBuffer) => setArrayBuffer(arrayBuffer))
    }, [])

    if (!arrayBuffer) {
        return <> loading </>;
    }

    return (
        <StickerStackComponent {...args} stickers={[
        {
            data: arrayBuffer,
            dataType: "jpg",
            date: new Date(),
            messageGuid: "guid",
            messageIndex: 0,
            sender: "Joe",
            type: MessageModifierType.Sticker
        }, {
            data: arrayBuffer,
            dataType: "jpg",
            date: new Date(Date.now() - 24 * 60 * 60 * 1000),
            messageGuid: "guid",
            messageIndex: 0,
            sender: "Doe",
            type: MessageModifierType.Tapback
        }]} />
    )
};

export const StickerStack = Template.bind({});
StickerStack.args = {
    peek: true
};
