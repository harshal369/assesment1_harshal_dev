package com.example.demo.arc;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserServ {
	
	@Autowired
	private UserRepo repo;

	public User regi(User user) {

		return repo.save(user);
	}

	public boolean log(RespEntity respEntity) {
		Optional<User> user=repo.findByEmail(respEntity.getEmail());
		
		if(user ==null ){
			return false;
		}
			
		User user2 =user.get();
		if(!user2.getPassword().equals(respEntity.getPassword())) {
			return false;
		}
		return true;
	}
}
