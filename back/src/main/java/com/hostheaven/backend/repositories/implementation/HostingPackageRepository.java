package com.hostheaven.backend.repositories.implementation;

import com.hostheaven.backend.models.HostingPackage;
import com.hostheaven.backend.repositories.interfaces.HostingPackageRepositoryInterface;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HostingPackageRepository implements HostingPackageRepositoryInterface {
	
	@Autowired
    private SessionFactory sessionFactory;
	
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

	@Override
	public List<HostingPackage> getAllStandardHostingPackages() {
		
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		 
		String hql="FROM HostingPackage WHERE custom=:custom";
		Query<HostingPackage> query=session.createQuery(hql, HostingPackage.class);
		query.setParameter("custom", false);
		List<HostingPackage> hostingPackages = query.getResultList();
		
		transaction.commit();
		session.close();
		
        return hostingPackages;
	}

}
