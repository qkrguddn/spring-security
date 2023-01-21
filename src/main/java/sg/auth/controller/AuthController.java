package sg.auth.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import sg.auth.dto.LoginDto;
import sg.auth.dto.TokenDto;
import sg.auth.dto.UserDto;
import sg.auth.entity.User;
import sg.auth.jwt.JwtFilter;
import sg.auth.jwt.TokenProvider;
import sg.auth.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Optional;


@RestController
public class AuthController {
    private final UserService userService;


    public AuthController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/join")
    public ResponseEntity<UserDto> signup(
            @Valid @RequestBody UserDto userDto) {
        return ResponseEntity.ok(userService.signup(userDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> authorize(@RequestBody LoginDto loginDto) {
        return userService.login(loginDto);
    }
    @GetMapping("/mainpage")
    public ResponseEntity<UserDto> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(userService.getMyUserWithAuthorities());
    }

    @GetMapping("/userinfo")
    public String userinfo() {
        return "userinfo";
    }

    @GetMapping("adminpage")
    public java.util.List<sg.auth.entity.User> allUser() {
        return userService.getAllUser();
    }


    @GetMapping("/user/{username}")
    public ResponseEntity<UserDto> getUserInfo(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserWithAuthorities(username));
    }
}
