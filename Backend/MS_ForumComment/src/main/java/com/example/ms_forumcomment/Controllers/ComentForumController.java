package com.example.ms_forumcomment.Controllers;

import com.example.ms_forumcomment.Entities.CommentForum;
import com.example.ms_forumcomment.Services.CommentForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/commentForum")
public class ComentForumController {
    @Autowired
    private CommentForumService commentForumService;
    @GetMapping
    public Iterable<CommentForum> getAll() {
        return commentForumService.getAll();
    }

    @GetMapping("/{id}")
    public CommentForum getById(@PathVariable Long id) {
        return commentForumService.getById(id);
    }

    @PostMapping
    public CommentForum create(@RequestBody CommentForum commentForum) {
        return commentForumService.create(commentForum);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        commentForumService.delete(id);
    }


}
