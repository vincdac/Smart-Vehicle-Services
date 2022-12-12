package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")

public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long emp_Id;

	@Column(name = "e_name")
	private String emp_Name;

	@Column(name = "e_pass")
	private String emp_Password;

	@Column(name = "e_email")
	private String emp_EmailId;

	@Column(name = "e_addr")
	private String emp_Address;

	@Column(name = "e_phno")
	private long emp_PhoneNo;

	public Employee() {
	}

	public Employee(String emp_Name, String emp_Password, String emp_EmailId, String emp_Address, long emp_PhoneNo) {
		super();
		this.emp_Name = emp_Name;
		this.emp_Password = emp_Password;
		this.emp_EmailId = emp_EmailId;
		this.emp_Address = emp_Address;
		this.emp_PhoneNo = emp_PhoneNo;
	}

	public long getEmp_Id() {
		return emp_Id;
	}

	public void setEmp_Id(long emp_Id) {
		this.emp_Id = emp_Id;
	}

	public String getEmp_Name() {
		return emp_Name;
	}

	public void setEmp_Name(String emp_Name) {
		this.emp_Name = emp_Name;
	}

	public String getEmp_Password() {
		return emp_Password;
	}

	public void setEmp_Password(String emp_Password) {
		this.emp_Password = emp_Password;
	}

	public String getEmp_EmailId() {
		return emp_EmailId;
	}

	public void setEmp_EmailId(String emp_EmailId) {
		this.emp_EmailId = emp_EmailId;
	}

	public String getEmp_Address() {
		return emp_Address;
	}

	public void setEmp_Address(String emp_Address) {
		this.emp_Address = emp_Address;
	}

	public long getEmp_PhoneNo() {
		return emp_PhoneNo;
	}

	public void setEmp_PhoneNo(long emp_PhoneNo) {
		this.emp_PhoneNo = emp_PhoneNo;
	}

}