package com.example.ms_forumcomment.Services;

import com.example.ms_forumcomment.Entities.Forum;
import com.example.ms_forumcomment.Repositories.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForumService {
    @Autowired
    private ForumRepository forumRepository;
    public Iterable<Forum> getAll() {
        return forumRepository.findAll();
    }
    public Forum getById(Long id) {
        return forumRepository.findById(id).orElse(null);
    }

    public Forum create(Forum forum) {
        // Add logic to handle file upload and other operations
        return forumRepository.save(forum);
    }
    public void delete(Long id) {
        forumRepository.deleteById(id);
    }

}
