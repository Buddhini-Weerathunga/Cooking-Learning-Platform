package com.pafproject.backend.repository;

import com.pafproject.backend.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
