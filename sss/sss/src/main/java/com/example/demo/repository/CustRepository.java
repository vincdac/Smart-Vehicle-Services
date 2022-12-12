package com.example.demo.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CustRepository {

	@PersistenceContext
	public EntityManager em;

	public boolean isValidCustomer(String email, String password) {
		return (long) em.createQuery("select count(c) from Customer c where c.c_email = :em and c.c_pass = :pw")
				.setParameter("em", email).setParameter("pw", password).getSingleResult() == 1 ? true : false;
	}

}
