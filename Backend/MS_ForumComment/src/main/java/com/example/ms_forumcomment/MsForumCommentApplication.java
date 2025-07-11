package com.example.ms_forumcomment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient

public class MsForumCommentApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsForumCommentApplication.class, args);
    }

}
