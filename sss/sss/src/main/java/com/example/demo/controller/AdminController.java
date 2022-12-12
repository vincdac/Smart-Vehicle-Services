package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.model.Customer;
import com.example.demo.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;

	@GetMapping("/admin")
	public List<Admin> getAllAdmin() {
		return adminRepository.findAll();
	}

	@PostMapping("/admin")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}

}
