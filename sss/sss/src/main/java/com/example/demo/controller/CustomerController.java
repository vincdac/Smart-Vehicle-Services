package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.InValidLoginException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Customer;

import com.example.demo.repository.CustomerRepository;
import com.example.demo.service.CustService;
import com.example.demo.status.RequestStatus;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RestController
public class CustomerController {

	@Autowired
	private CustService cs;

	@Autowired
	private CustomerRepository customerRepository;

	@PostMapping("/login")
	public RequestStatus loginCustomer(@RequestBody Customer customer) {

		try {
			String email = cs.loginCustomerService(customer);
			RequestStatus rs = new RequestStatus();
			rs.setEmail(email);
			rs.setMessage("Login Successful");
			rs.setStatus(true);
			return rs;
		} catch (InValidLoginException e) {
			RequestStatus rs = new RequestStatus();
			rs.setMessage(e.getMessage());
			rs.setStatus(false);
			return rs;
		}
	}

	@GetMapping("/customer")
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

	@PostMapping("/customer")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}

	@GetMapping("/customer/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id = " + id + "does not exist."));
		return ResponseEntity.ok(customer);
	}

	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable long id, @RequestBody Customer customerDetails) {
		Customer updateCustomer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id = " + id + "does not exist."));
		updateCustomer.setC_name(customerDetails.getC_name());
		updateCustomer.setC_addr(customerDetails.getC_addr());
		updateCustomer.setC_email(customerDetails.getC_email());
		customerRepository.save(updateCustomer);
		return ResponseEntity.ok(updateCustomer);
	}

	@DeleteMapping("/customer/{id}")
	public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee with id = " + id + "does not exist."));
		customerRepository.delete(customer);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
