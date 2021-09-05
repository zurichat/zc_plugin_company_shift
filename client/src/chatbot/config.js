
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";

const config = {
    botname: "ZuriBot",
	initialMessages: [createChatBotMessage(`Hello world, welcome to zuri chat app`)],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
            // mapStateToProps: ["gist"],
            // props: {}
          },
    ]
};

export default config;
