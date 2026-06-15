package com.example.backend.controller;

import com.example.backend.repository.BookRepository;
import com.example.backend.repository.MemberRepository;
import com.example.backend.repository.IssueRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    private final BookRepository bookRepository;
    private final MemberRepository memberRepository;
    private final IssueRepository issueRepository;

    public DashboardController(BookRepository bookRepository,
                               MemberRepository memberRepository,
                               IssueRepository issueRepository) {
        this.bookRepository = bookRepository;
        this.memberRepository = memberRepository;
        this.issueRepository = issueRepository;
    }

    @GetMapping
    public Map<String, Long> getDashboardData() {

        Map<String, Long> data = new HashMap<>();

        data.put("totalBooks", bookRepository.count());
        data.put("totalMembers", memberRepository.count());
        data.put("issuedBooks", issueRepository.count());

        return data;
    }
}