import type { Meta } from "@storybook/react";
import BorderedCloseIconComponent from "../BorderedCloseIcon";
import CreateConversationIcon from "../CreateConversationIcon";
import DiscordIcon from "../DiscordIcon";
import MessageCheckIcon from "../MessageCheckIcon";
import PushIcon from "../PushIcon";
import RedditIcon from "../RedditIcon";
import TapbackDislikeIcon from "../TapbackDislikeIcon";
import TapbackEmphasisIcon from "../TapbackEmphasisIcon";
import TapbackLaughIcon from "../TapbackLaughIcon";
import TapbackLikeIcon from "../TapbackLikeIcon";
import TapbackLoveIcon from "../TapbackLoveIcon";
import TapbackQuestionIcon from "../TapbackQuestionIcon";

const meta: Meta<typeof BorderedCloseIconComponent> = {
  title: "components/icon",
  component: BorderedCloseIconComponent,
};

export default meta;

export {
  BorderedCloseIconComponent as BorderedCloseIcon,
  CreateConversationIcon,
  DiscordIcon,
  MessageCheckIcon,
  PushIcon,
  RedditIcon,
  TapbackDislikeIcon,
  TapbackEmphasisIcon,
  TapbackLaughIcon,
  TapbackLikeIcon,
  TapbackLoveIcon,
  TapbackQuestionIcon
};
