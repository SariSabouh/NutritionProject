package com.paliup.nutrition.Model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")


public class Role {
    private long CustomerRoleId;
    private String Role;
    private Set<Account> Accounts;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getCustomerRoleId() {
        return CustomerRoleId;
    }

    public void setId(long id) {
        this.CustomerRoleId = id;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        this.Role = role;
    }

    @ManyToMany(mappedBy = "roles")
    
    public Set<Account> getAccounts() {
        return Accounts;
    }

    public void setUsers(Set<Account> Accounts) {
        this.Accounts = Accounts;
    }
}
