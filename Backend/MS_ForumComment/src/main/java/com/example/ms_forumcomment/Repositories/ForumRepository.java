package com.example.ms_forumcomment.Repositories;

import com.example.ms_forumcomment.Entities.Forum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumRepository extends CrudRepository<Forum,Long> {
}
