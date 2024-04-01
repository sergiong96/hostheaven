package com.hostheaven.backend.services.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.repositories.implementation.HostingPackageRepository;
import com.hostheaven.backend.services.interfaces.HostingPackageServiceInterface;

@Service
public class HostingPackageService implements HostingPackageServiceInterface {
	
	@Autowired
	private HostingPackageRepository hostingPackageRepository;

	@Override
	public void createHostingPackage() {
		this.hostingPackageRepository.createHostingPackage();
	}

	@Override
	public HostingPackage getHostingPackageById(int id) {
		HostingPackage hostingPackage = this.hostingPackageRepository.getHostingPackageById(id);
		return hostingPackage;
	}

	@Override
	public List<HostingPackage> getAllHostingPackagesByUserId(int id_user) {
		List<HostingPackage> hostingPackages = this.hostingPackageRepository.getAllHostingPackagesByUserId(id_user);
		return hostingPackages;
	}

}
