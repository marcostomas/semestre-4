package com.tuspeliculasfavoritas.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@Controller
public class HomeController{

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(){
        return "index";
    }
}
