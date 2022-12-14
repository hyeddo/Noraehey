package com.singsong.db.repository;

import com.singsong.db.entity.Song;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    List<Song> findAllBySongTitleOrderBySongLikeCountDesc(String word);
    List<Song> findAllBySongTitleContainsAndSongTitleNotOrderBySongLikeCountDesc(String word1, String word2);
    List<Song> findAllBySongSingerOrderBySongLikeCountDesc(String word);
    List<Song> findAllBySongSingerContainsAndSongSingerNotOrderBySongLikeCountDesc(String word1, String word2);
    Optional<Song> findSongBySongId(Long songId);
}
