package com.example.backend.service.impl;

import com.example.backend.entity.IssueBook;
import com.example.backend.repository.IssueRepository;
import com.example.backend.service.IssueService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class IssueServiceImpl implements IssueService {

    private final IssueRepository repository;

    public IssueServiceImpl(IssueRepository repository) {
        this.repository = repository;
    }

    @Override
    public IssueBook issueBook(IssueBook issueBook) {

        issueBook.setIssueDate(LocalDate.now());
        issueBook.setReturned(false);

        return repository.save(issueBook);
    }

    @Override
    public List<IssueBook> getAllIssuedBooks() {
        return repository.findAll();
    }

    @Override
    public IssueBook getIssueById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public IssueBook returnBook(Long id) {

        IssueBook issue = repository.findById(id).orElse(null);

        if (issue == null) {
            return null;
        }

        issue.setReturned(true);
        issue.setReturnDate(LocalDate.now());

        return repository.save(issue);
    }

    @Override
    public void deleteIssue(Long id) {
        repository.deleteById(id);
    }
}