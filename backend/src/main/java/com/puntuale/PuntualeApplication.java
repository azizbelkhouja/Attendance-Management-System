package com.puntuale;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PuntualeApplication {

	public static void main(String[] args) {

		// .env file
		Dotenv dotenv = Dotenv.load();
		String dbUrl = dotenv.get("DB_URL");
		String dbUser = dotenv.get("DB_USERNAME");
		String dbPass = dotenv.get("DB_PASSWORD");
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));

		SpringApplication.run(PuntualeApplication.class, args);
	}

}
