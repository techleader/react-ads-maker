package com.add;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {

        System.setProperty("DB_URL","jdbc:mysql://localhost:3306/adsmaker");
        System.setProperty("DB_DRIVER_CLASS","com.mysql.jdbc.Driver");
        System.setProperty("DB_USERNAME","root");
        System.setProperty("DB_PASSWORD","timsp");
        System.setProperty("spring.profiles.active", "mysql");
        System.setProperty("IMAGES_LOCATION","E:\\ImagesUpload");
        SpringApplication.run(Application.class, args);
    }
}
