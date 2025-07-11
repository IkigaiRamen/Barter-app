package com.example.annoncems.Entites;



import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Entity
@Table(name = "annonce")
public class Annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(nullable = false, length = 1000)
    private String description;


    private String image;

    @Column(nullable = false)
    private String telephone;

    @Column(nullable = false)
    private String echange;

    public Long getId() {
        return id;
    }

    public Annonce() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public Annonce(String titre, String description, String image, String telephone, String echange) {
        this.titre = titre;
        this.description = description;
        this.image = image;
        this.telephone = telephone;
        this.echange = echange;

    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEchange() {
        return echange;
    }

    public void setEchange(String echange) {
        this.echange = echange;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne
    @JoinColumn(name = "id_categorie", nullable = true)
    private Category category;

    // Constructors, getters, and setters

    // Default constructor


    // Constructor without ID


    // Getters and setters
    // ...

    // Equals and hashcode methods

}
