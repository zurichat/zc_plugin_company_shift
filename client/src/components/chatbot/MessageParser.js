class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    if (
      lowercase.includes("hello") ||
      lowercase.includes("good") ||
      lowercase.includes("help") ||
      lowercase.includes("hey")
    ) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
