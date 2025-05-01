package com.pafproject.backend.service;

import com.pafproject.backend.models.Community;
import com.pafproject.backend.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }

    public Community getCommunityById(Long id) {
        return communityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Community not found with id: " + id));
    }

    public Community createCommunity(Community community) {
        return communityRepository.save(community);
    }

    public Community updateCommunity(Long id, Community communityDetails) {
        Community community = getCommunityById(id);
        community.setGroupName(communityDetails.getGroupName());
        community.setGroupDescription(communityDetails.getGroupDescription());
        return communityRepository.save(community);
    }

    public void deleteCommunity(Long id) {
        if (!communityRepository.existsById(id)) {
            throw new RuntimeException("Community not found with id: " + id);
        }
        communityRepository.deleteById(id);
    }
}
