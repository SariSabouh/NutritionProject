package com.paliup.nutrition.Model;

import java.util.Set;

import javax.persistence.*;





@Entity
@Table(name="account")

public class Account {
	
	private long CustomerId;
	private String Email;
	private String Password;
	private int Enabled;
	private Set<Role> Roles;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	public long getId() {
        return CustomerId;  
    }
	
	public void setId(long id) {
        this.CustomerId = id;
    }
	
	public String getEmail() {
        return Email;
    }
	
	public void setEmail(String Email) {
        this.Email=Email;
    }
	
	public String getPassword() {
        return Password;  
    }
	
	public void setPassword(String Password) {
        this.Password=Password;  
    }
	
	
	
	public int getEnabled() {
        return Enabled;    
    }
	
	public void setEnabled(int Enabled) {
       this.Enabled=Enabled;    
    }
	
	@ManyToMany
    @JoinTable(name = "AccountRole", joinColumns = @JoinColumn(name = "CustomerId"), inverseJoinColumns = @JoinColumn(name = "CustomerRoleId"))
    public Set<Role> getRoles() {
        return Roles;
    }

    public void setRoles(Set<Role> roles) {
        this.Roles = roles;
    }
	
	
	

}
