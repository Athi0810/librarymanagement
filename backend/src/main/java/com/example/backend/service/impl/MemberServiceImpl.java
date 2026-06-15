package com.example.backend.service.impl;

import com.example.backend.entity.Member;
import com.example.backend.repository.MemberRepository;
import com.example.backend.service.MemberService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository repository;

    public MemberServiceImpl(MemberRepository repository) {
        this.repository = repository;
    }

    @Override
    public Member addMember(Member member) {
        return repository.save(member);
    }

    @Override
    public List<Member> getAllMembers() {
        return repository.findAll();
    }

    @Override
    public Member getMemberById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Member updateMember(Long id, Member member) {

        Member existing = repository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setName(member.getName());
        existing.setEmail(member.getEmail());
        existing.setPhone(member.getPhone());
        existing.setAddress(member.getAddress());

        return repository.save(existing);
    }

    @Override
    public void deleteMember(Long id) {
        repository.deleteById(id);
    }
}