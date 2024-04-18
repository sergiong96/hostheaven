package com.hostheaven.backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.services.implementation.HostingPackageService;

@RestController
@RequestMapping("/hostingpackages")
@CrossOrigin(origins = "http://localhost:3000") //CAMBIAR EN ENTORNO DE PRODUCCION
public class HostingPackageController {

	@Autowired
	private HostingPackageService hostingPackageService;

	@PutMapping("/create")
	public void createHostingPackage(HostingPackage hostingPackage) {
		hostingPackageService.createHostingPackage(hostingPackage);
	}

	@GetMapping("/hostingpackage/{id}")
	public HostingPackage getHostingPackage(@PathVariable int id) {
		HostingPackage hostingPackage = hostingPackageService.getHostingPackageById(id);
		return hostingPackage;
	}

	@GetMapping("/hostingpackages/user/{id_user}")
	public List<HostingPackage> getAllHostingPackagesByUser(@PathVariable int id_user) {
		List<HostingPackage> hostingPackages = hostingPackageService.getAllHostingPackagesByUserId(id_user);
		return hostingPackages;
	}
	
	@GetMapping("/standard")
	public List<HostingPackage> getAllStandardPackages(){
		List<HostingPackage> hostingPackages=hostingPackageService.getAllStandardHostingPackages();
		return hostingPackages;
	}

}
