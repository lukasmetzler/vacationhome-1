package nl.nettes.heim.vacationhome.controller;

import nl.nettes.heim.vacationhome.domain.ApplicationUser;
import nl.nettes.heim.vacationhome.persistance.ApplicationUserRepository;
import nl.nettes.heim.vacationhome.service.ApplicationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class ApplicationUserController {

    @Autowired
    private ApplicationUserRepository applicationUserRepository;
    private ApplicationUserService applicationUserService;

    @GetMapping(value = "api/user/{id}")
    public ApplicationUser getUserById(@PathVariable long id){
        Optional<ApplicationUser> user = applicationUserRepository.findById(id);
        return user.orElse(null);
    }

    @PostMapping(value = "api/register/")
    public ApplicationUser register(@RequestBody ApplicationUser newUser){
        return applicationUserRepository.save(newUser);
    }

    @PostMapping(value="api/login")
    public ApplicationUser signIn(@RequestBody String name, String password){
        return applicationUserService.signIn(name,password);
    }




}
