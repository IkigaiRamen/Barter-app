package com.example.ms_forumcomment.Services;

import com.example.ms_forumcomment.Entities.CommentForum;
import com.example.ms_forumcomment.Repositories.CommentForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentForumService {
    @Autowired
    private CommentForumRepository commentForumRepository;
    public Iterable<CommentForum> getAll() {
        return commentForumRepository.findAll();
    }
    public CommentForum getById(Long id) {
        return commentForumRepository.findById(id).orElse(null);
    }

    public CommentForum create(CommentForum commentForum) {
        return commentForumRepository.save(commentForum);
    }
    public void delete(Long id) {
        commentForumRepository.deleteById(id);
    }



}
