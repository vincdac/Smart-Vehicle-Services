package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "customer")
@Entity
public class Customer {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long c_id;
	@Column(name = "c_name")
	private String c_name;

	@Column(name = "c_addr")
	private String c_addr;

	@Column(name = "c_email")
	private String c_email;

	@Column(name = "c_pass")
	private String c_pass;

	@Column(name = "c_phno")
	private long c_phno;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(long c_id, String c_name, String c_addr, String c_email, String c_pass, long c_phno) {
		super();
		this.c_id = c_id;
		this.c_name = c_name;
		this.c_addr = c_addr;
		this.c_email = c_email;
		this.c_pass = c_pass;
		this.c_phno = c_phno;
	}

	public long getC_id() {
		return c_id;
	}

	public void setC_id(long c_id) {
		this.c_id = c_id;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getC_addr() {
		return c_addr;
	}

	public void setC_addr(String c_addr) {
		this.c_addr = c_addr;
	}

	public String getC_email() {
		return c_email;
	}

	public void setC_email(String c_email) {
		this.c_email = c_email;
	}

	public String getC_pass() {
		return c_pass;
	}

	public void setC_pass(String c_pass) {
		this.c_pass = c_pass;
	}

	public long getC_phno() {
		return c_phno;
	}

	public void setC_phno(long c_phno) {
		this.c_phno = c_phno;
	}

}
