package com.ai.springaichat;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
	private final OpenAiImageModel openAiImage;
	
	public ImageService(OpenAiImageModel openAiImage) {
		this.openAiImage = openAiImage;
	}
	
	
	public ImageResponse generateImages(
			
									String prompt,
									String quality,
									int n,
									int width,
									int height
			
			) {
		ImageResponse image = openAiImage.call(
					new ImagePrompt(
							prompt, 
							OpenAiImageOptions.builder()
								.withQuality(quality)
								.withModel("dall-e-2") //using only dall-e-2 we can generate multiple images.
								.withN(n) //number of images need as output
								.withWidth(width) //height of the image.
								.withHeight(height) //width of the image.
								.build()
							)
				);	
		return image;
	}
	
	
}
