package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long a_id;

	@Column(name = "a_name")
	private String a_name;

	@Column(name = "a_addr")
	private String a_addr;

	@Column(name = "a_email")
	private String a_email;

	@Column(name = "a_phno")
	private long a_phno;

	@Column(name = "a_pass")
	private String a_pass;

	public String getA_pass() {
		return a_pass;
	}

	public void setA_pass(String a_pass) {
		this.a_pass = a_pass;
	}

	public void setA_id(long a_id) {
		this.a_id = a_id;
	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(long a_id, String a_name, String a_addr, String a_email, long a_phno, String a_pass) {
		super();
		this.a_id = a_id;
		this.a_name = a_name;
		this.a_addr = a_addr;
		this.a_email = a_email;
		this.a_phno = a_phno;
		this.a_pass = a_pass;
	}

	public long getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public String getA_name() {
		return a_name;
	}

	public void setA_name(String a_name) {
		this.a_name = a_name;
	}

	public String getA_addr() {
		return a_addr;
	}

	public void setA_addr(String a_addr) {
		this.a_addr = a_addr;
	}

	public String getA_email() {
		return a_email;
	}

	public void setA_email(String a_email) {
		this.a_email = a_email;
	}

	public long getA_phno() {
		return a_phno;
	}

	public void setA_phno(long a_phno) {
		this.a_phno = a_phno;
	}

}
