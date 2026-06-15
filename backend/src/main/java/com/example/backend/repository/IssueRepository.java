package com.example.backend.repository;

import com.example.backend.entity.IssueBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<IssueBook, Long> {

    List<IssueBook> findByReturned(boolean returned);

}