package com.example.trocmicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TrocMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrocMicroserviceApplication.class, args);
	}

}
