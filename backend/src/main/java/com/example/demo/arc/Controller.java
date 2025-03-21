package com.example.demo.arc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.transaction.Transactional;

@Transactional
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
	
	@Autowired
	private UserServ serv;
	
	@PostMapping("/registration")
	public User registration(@RequestBody User user ) {
		return serv.regi(user);
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody RespEntity respEntity) {
				return serv.log(respEntity);
	}
}
