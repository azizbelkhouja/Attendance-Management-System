package com.puntuale.service;

import com.puntuale.dto.ProjectDTO;
import com.puntuale.entities.Project;
import com.puntuale.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectDTO addProject(ProjectDTO dto) {

        Project project = new Project();
        project .setName(dto.getName());
        project.setDuration(dto.getDuration());
        project.setStartDate(dto.getStartDate());

        return projectRepository.save(project).getDto();
    }
}
