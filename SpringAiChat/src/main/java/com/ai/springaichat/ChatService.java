package com.ai.springaichat;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.*;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//chat configuration of AI

@Service
public class ChatService {
	@Autowired
	private final ChatModel chatModel;
	
	public ChatService(ChatModel chatModel) {
		this.chatModel = chatModel;
	}
	
	public String getResponse(String prompt) {
		return chatModel.call(prompt);
	}
	
	public String getResponseOptions(String prompt) {
		ChatResponse response =  chatModel.call(
				new Prompt(
						prompt,
						OpenAiChatOptions.builder()
							.withModel("gpt-3.5")
							.withTemperature((double) 0.4F)
							.withMaxTokens(10)
							.build()
							
				));
		
		return response.getResult().getOutput().getContent();
	}
}
