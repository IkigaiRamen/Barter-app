package com.example.ms_forumcomment.Controllers;

import com.example.ms_forumcomment.Entities.Forum;
import com.example.ms_forumcomment.Services.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/forum")
public class ForumController {
    @Autowired
    private ForumService forumService;
    @GetMapping
    public Iterable<Forum> getAll() {
        return forumService.getAll();
    }

    @GetMapping("/{id}")
    public Forum getById(@PathVariable Long id) {
        return forumService.getById(id);
    }

    @PostMapping
    public Forum create(@RequestBody Forum forum) {
        return forumService.create(forum);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        forumService.delete(id);
    }

}
