package com.example.ms_forumcomment.Entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Comments_forum")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CommentForum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    @ManyToOne
    @JoinColumn(name = "forum_id")
    private Forum forum;
}
