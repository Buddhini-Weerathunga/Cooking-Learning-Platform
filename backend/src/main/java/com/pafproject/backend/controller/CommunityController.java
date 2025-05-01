package com.pafproject.backend.controller;

import com.pafproject.backend.models.Community;
import com.pafproject.backend.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/communities")
public class CommunityController {

    @Autowired
    private CommunityRepository communityRepository;

    @GetMapping
    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }

    @PostMapping
    public Community createCommunity(@RequestBody Community community) {
        return communityRepository.save(community);
    }

    @GetMapping("/{id}")
    public Community getCommunityById(@PathVariable Long id) {
        return communityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Community not found with id: " + id));
    }

    @PutMapping("/{id}")
    public Community updateCommunity(@PathVariable Long id, @RequestBody Community communityDetails) {
        Community community = communityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Community not found with id: " + id));

        community.setGroupName(communityDetails.getGroupName());
        community.setGroupDescription(communityDetails.getGroupDescription());

        return communityRepository.save(community);
    }

    @DeleteMapping("/{id}")
    public void deleteCommunity(@PathVariable Long id) {
        if (!communityRepository.existsById(id)) {
            throw new RuntimeException("Community not found with id: " + id);
        }
        communityRepository.deleteById(id);
    }
}
