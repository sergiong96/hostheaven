package com.hostheaven.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class HostHeavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(HostHeavenApplication.class, args);
	}

}
