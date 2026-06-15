package com.example.backend.service;

import com.example.backend.entity.IssueBook;
import java.util.List;

public interface IssueService {

    IssueBook issueBook(IssueBook issueBook);

    List<IssueBook> getAllIssuedBooks();

    IssueBook getIssueById(Long id);

    IssueBook returnBook(Long id);

    void deleteIssue(Long id);

}