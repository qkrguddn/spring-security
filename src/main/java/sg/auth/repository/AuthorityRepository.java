package sg.auth.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import sg.auth.entity.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
