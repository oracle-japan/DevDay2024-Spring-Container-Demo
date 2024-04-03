
package com.example.handson.okeadvanced.datasource;

import java.util.List;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.Access;
import jakarta.persistence.AccessType;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQueries;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity(name = "Medalist")
@Table(name = "MEDALIST")
@Access(AccessType.PROPERTY)
@NamedQueries({ @NamedQuery(name = "getGoldMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 1"),
        @NamedQuery(name = "getSilverMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 2"),
        @NamedQuery(name = "getBronzeMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 3") })
public class Medalist {

    private int id;

    private String name;

    @JsonbTransient
    private Medal medal;

    private String color;

    public Medalist() {
    }

    @Id
    @Column(name = "ID", nullable = false, updatable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic(optional = false)
    @Column(name = "NAME", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    public Medal getMedal() {
        return medal;
    }

    public void setMedal(Medal medal) {
        this.medal = medal;
        this.color = medal.getName();
    }

    @Transient
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        String output = "ID:" + id + ", " + "Name:" + name + ", " + "Color:" + medal.getName();
        return output;
    }

}
