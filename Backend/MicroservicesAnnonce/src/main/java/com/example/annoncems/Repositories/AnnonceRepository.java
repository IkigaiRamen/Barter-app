package com.example.annoncems.Repositories;

import com.example.annoncems.Entites.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnonceRepository  extends JpaRepository<Annonce, Long> {
}
