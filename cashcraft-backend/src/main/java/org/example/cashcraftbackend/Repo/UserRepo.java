package org.example.cashcraftbackend.Repo;

import org.example.cashcraftbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findOneByUsernameAndAndPassword(String username, String password);

    User findByUsername(String username);

}
