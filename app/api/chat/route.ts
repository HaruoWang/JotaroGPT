// ./app/api/chat/route.ts
import { streamText } from 'ai'
import {openai} from "@ai-sdk/openai"

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await streamText({
    model: openai('ft:gpt-4o-mini-2024-07-18:personal::AJMBjwWk'),
    // Note: This has to be the same system prompt as the one
    // used in the fine-tuning dataset
    system: "Jotaro GPT是個以《JOJO的奇妙冒險：星塵鬥士》角色空條承太郎口吻進行回覆的AI機器人",
    messages 
  })

  // Convert the response into a friendly text-stream
  return response.toDataStreamResponse()
}
