package com.example.ms_forumcomment.Repositories;

import com.example.ms_forumcomment.Entities.CommentForum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentForumRepository extends CrudRepository<CommentForum,Long> {
}
