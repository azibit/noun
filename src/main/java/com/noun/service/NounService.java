/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.service;

import com.noun.crud.CrudServiceProviderLocal;
import com.noun.dto.UserDto;
import com.noun.entities.User;
import com.noun.dto.EntityMapper;
import com.noun.dto.ResourceDto;
import com.noun.entities.Resource;
import com.noun.mngr.UserMngrLocal;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author azibit
 */
@Stateless
public class NounService {

    @EJB
    CrudServiceProviderLocal crudServiceProviderLocal;
    
    @EJB
    UserMngrLocal userMngrLocal;
    

    public UserDto saveUser(UserDto newUserDto) {
        return EntityMapper.mapToUserDto(crudServiceProviderLocal
                .create(EntityMapper.mapToUser(newUserDto)));
    }
    
    public ResourceDto saveResource(ResourceDto newResourceDto) {
        return EntityMapper.mapToResourceDto(crudServiceProviderLocal
                .create(EntityMapper.mapToResource(newResourceDto)));
    }
    
    public UserDto getUser(String id){
        return EntityMapper.mapToUserDto(userMngrLocal.getUser(id));
    }

    public List<UserDto> getAllUsers() {
        List<User> users = crudServiceProviderLocal.findAll(User.class);
        List<UserDto> userDtos = new ArrayList<>();
        if (users != null || users.size() > 0) {
            for (User user : users) {
                userDtos.add(EntityMapper.mapToUserDto(user));
            }
            return userDtos;
        } else {
            return userDtos;
        }

    }
    
    public List<ResourceDto> getAllResources(){
        List<Resource> resources = crudServiceProviderLocal.findAll(Resource.class);
        List<ResourceDto> resourcesDto = new ArrayList();
        
        if (resources != null || resources.size() > 0) {
            for (Resource resource : resources) {
                resourcesDto.add(EntityMapper.mapToResourceDto(resource));
            }
            return resourcesDto;
        } else {
            return resourcesDto;
        }
    }
    
}
