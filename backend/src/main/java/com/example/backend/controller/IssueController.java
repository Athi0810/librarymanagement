package com.example.backend.controller;

import com.example.backend.entity.IssueBook;
import com.example.backend.service.IssueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "*")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @PostMapping
    public IssueBook issueBook(@RequestBody IssueBook issueBook) {
        return issueService.issueBook(issueBook);
    }

    @GetMapping
    public List<IssueBook> getAllIssuedBooks() {
        return issueService.getAllIssuedBooks();
    }

    @PutMapping("/return/{id}")
    public IssueBook returnBook(@PathVariable Long id) {
        return issueService.returnBook(id);
    }
}