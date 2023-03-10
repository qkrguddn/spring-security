package sg.auth.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "`user`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

   @Id
   @Column(name = "user_id")
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long userId;

   @Column(unique = true)
   private String username;

   @Column
   private String password;

   @Column
   private String nickname;

   @Column
   private boolean activated;

   @ManyToMany
   @JoinTable(
           name = "user_authority",
           joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
           inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
   private Set<Authority> authorities;
}