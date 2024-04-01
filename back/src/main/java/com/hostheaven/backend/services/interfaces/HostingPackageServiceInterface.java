package com.hostheaven.backend.services.interfaces;

import java.util.List;

import com.hostheaven.backend.models.HostingPackage;

public interface HostingPackageServiceInterface {

	// Crea un nuevo paquete de hosting
	public void createHostingPackage();

	// Obtiene los datos de un paquete de hosting por su identificador
	public HostingPackage getHostingPackageById(int id);

	// Obtiene todos los paquetes de hosting según el id del usuario
	public List<HostingPackage> getAllHostingPackagesByUserId(int id_user);
}
