package com.hostheaven.backend.repositories.interfaces;

import java.util.List;
import com.hostheaven.backend.models.HostingPackage;

public interface HostingPackageRepositoryInterface {

	// Crea un nuevo paquete de hosting
	public int createHostingPackage(HostingPackage hostingPackage);

	// Obtiene los datos de un paquete de hosting por su identificador
	public HostingPackage getHostingPackageById(int id);

	// Obtiene todos los paquetes de hosting según el id del usuario
	public List<HostingPackage> getAllHostingPackagesByUserId(int id_user);

	//Obtiene todos los paquetes de hosting preconfigurados
	public List<HostingPackage> getAllStandardHostingPackages();
}
