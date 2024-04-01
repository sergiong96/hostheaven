package com.hostheaven.backend.repositories.implementation;

import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.repositories.interfaces.HostingPackageRepositoryInterface;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class HostingPackageRepository implements HostingPackageRepositoryInterface {

	@Override
	public void createHostingPackage() {

	}

	@Override
	public HostingPackage getHostingPackageById(int id) {
		return null;
	}

	@Override
	public List<HostingPackage> getAllHostingPackagesByUserId(int id_user) {
		return null;
	}

}
