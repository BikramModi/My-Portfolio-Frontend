import AIMessageBubble, {
  type AIMessage,
} from './AIMessageBubble';

interface AIMessageListProps {
  messages: AIMessage[];
}

export default function AIMessageList({
  messages,
}: AIMessageListProps) {
  return (
    <div className="flex min-h-[360px] flex-col gap-5 overflow-y-auto p-5 sm:p-6">
      {messages.map((message) => (
        <AIMessageBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}