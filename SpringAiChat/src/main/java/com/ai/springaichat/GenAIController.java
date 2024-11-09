package com.ai.springaichat;

import java.io.IOException;
import java.util.*;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class GenAIController {
	
	private final ChatService chatService;
	private final ImageService imageService;
	private final RecipeService recipeService;
	
	
	public GenAIController(ChatService chatService, ImageService imageService, RecipeService recipeService) {
		this.chatService = chatService;
		this.imageService = imageService;
		this.recipeService = recipeService;
	}
	
	
	@GetMapping("ask-ai")
	public String getResponse(@RequestParam String prompt) {
		return chatService.getResponse(prompt);
	}
	
	@GetMapping("ask-ai-options")
	public String getResponseOptions(@RequestParam String prompt) {
		return chatService.getResponse(prompt);
	}
	
	
	@GetMapping("generate-image")
	public List<String> generateImages(
				
			//parameters					
			@RequestParam String prompt, 
			@RequestParam (defaultValue="hd") String quality,
			@RequestParam (defaultValue="1") int n,
			@RequestParam (defaultValue="1024") int width,
			@RequestParam (defaultValue="1024") int height,
			HttpServletResponse response
									
			) throws IOException {
		
		ImageResponse imageResponse = imageService.generateImages(prompt, quality, width, height, n);
		
		List<String> imageUrls = imageResponse.getResults().stream()
										.map(result->result.getOutput().getUrl())
										.toList();
		
		return imageUrls;
		//if you are returning multiple images. The image response will have multiple response..
	}
	
	@GetMapping("recipe-creator")
	public String recipeCreator(
			@RequestParam String ingredients,
			@RequestParam (defaultValue = "any") String cuisine,
			@RequestParam (defaultValue = "") String dietaryRestrictions
			){
		
		return recipeService.createReponse(ingredients, cuisine, dietaryRestrictions);
	}
	
}
