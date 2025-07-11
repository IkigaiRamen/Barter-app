package com.example.annoncems.Controllers;

import com.example.annoncems.Entites.Annonce;
import com.example.annoncems.Services.AnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/annonces")
@CrossOrigin("*")
public class AnnonceController {
    @Autowired
    private AnnonceService annonceService;

    // Opération de création (POST)
    @PostMapping
    public ResponseEntity<Annonce> createAnnonce(@RequestBody Annonce annonce) {
        try {
            Annonce createdAnnonce = annonceService.createAnnonce(annonce);
            if (createdAnnonce != null) {
                return new ResponseEntity<>(createdAnnonce, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            // Intercepter l'exception et renvoyer une réponse appropriée
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // Opération de lecture (GET)
    @GetMapping("/{id}")
    public ResponseEntity<Annonce> getAnnonceById(@PathVariable Long id) {
        Optional<Annonce> annonce = annonceService.getAnnonceById(id);
        return annonce.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Opération de mise à jour (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<Annonce> updateAnnonce(@PathVariable Long id, @RequestBody Annonce updatedAnnonce) {
        Annonce updated = annonceService.updateAnnonce(id, updatedAnnonce);
        if (updated != null) {
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Opération de suppression (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnonce(@PathVariable Long id) {
        annonceService.deleteAnnonce(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Opération de liste (GET)
    @GetMapping
    public ResponseEntity<List<Annonce>> getAllAnnonces() {
        List<Annonce> annonces = annonceService.getAllAnnonces();
        return new ResponseEntity<>(annonces, HttpStatus.OK);
    }
}
