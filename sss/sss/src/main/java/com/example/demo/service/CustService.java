package com.example.demo.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.InValidLoginException;
import com.example.demo.model.Customer;
import com.example.demo.repository.CustRepository;

@Service
public class CustService {

	@Autowired
	CustRepository cr;

	@Transactional
	public String loginCustomerService(Customer customer) {
		if (cr.isValidCustomer(customer.getC_email(), customer.getC_pass())) {
			return customer.getC_email();
		} else {
			throw new InValidLoginException("Please enter valid email and password");
		}
	}

}
