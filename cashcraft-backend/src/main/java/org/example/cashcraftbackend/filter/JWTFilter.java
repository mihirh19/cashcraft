package org.example.cashcraftbackend.filter;


import org.example.cashcraftbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.example.cashcraftbackend.utility.JWTUtility;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private UserService userService;

    @Autowired
    private JWTUtility jwtUtility;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String authorization = httpServletRequest.getHeader("Authorization");
        String token = null;
        String username = null;

        if(null != authorization && authorization.startsWith("Bearer ")) {
            token = authorization.substring(7);
            username = jwtUtility.getUsernameFromToken(token);
        }

        if(null != username && SecurityContextHolder.getContext().getAuthentication() == null) {


            UserDetails userDetails
                    = userService.loadUserByUserName(username);

            if(jwtUtility.validateToken(token,userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
                        = new UsernamePasswordAuthenticationToken(userDetails,
                        null, userDetails.getAuthorities());

                usernamePasswordAuthenticationToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(httpServletRequest)
                );

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }

        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }


}
