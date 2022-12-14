package com.singsong.api.service;

import com.singsong.api.response.ShortsEntityRes;
import com.singsong.db.entity.Member;
import com.singsong.db.entity.Shorts;
import com.singsong.db.entity.Song;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ShortsService {
    void saveShorts(Song song, Member member, String shortsComment, MultipartFile shortsAudioFile) throws IOException;
    void deleteShorts(Long shortsId, Member member);
    List<Shorts> getShortsListBySongIdPopular(Long songId, int page);
    List<Shorts> getShortsListBySongIdRecent(Long songId, int page);
    List<Shorts> getShortsListByMemberId(Long memberId, int page);
    List<ShortsEntityRes> createShortsListBySong(List<Shorts> shortsList, Song song, Member member);
    List<ShortsEntityRes> createShortsListByMember(List<Shorts> shortsList, Member loginMember, Member shortsMember);
    List<ShortsEntityRes> getShortsListOrderByLike(Member member);
    List<ShortsEntityRes> createShortsListByRandom(Member member);
    ShortsEntityRes getShortsDetailByShortsId(Long shortsId, Member member);
    int countShortsLike(Long shortsId);
    void addShortsLike(Member member, Long shortsId);
    void deleteShortsLike(Member member, Long shortsId);
    List<ShortsEntityRes> getLikeShortsList(Member member, int page);
}
