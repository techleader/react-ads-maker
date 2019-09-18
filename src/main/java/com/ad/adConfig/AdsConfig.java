package com.ad.adConfig;


import com.ad.service.DataService;
import com.ad.service.ImageService;
import com.ad.service.MySqlDataServiceImpl;
import com.mysql.cj.jdbc.MysqlDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.servlet.MultipartConfigElement;
import javax.sql.DataSource;
import java.sql.SQLException;


@Configuration
public class AdsConfig {


    @Value("${DB_URL}")
    String DB_URL;
    @Value("${DB_DRIVER_CLASS}")
    String DB_DRIVER_CLASS;
    @Value("${DB_USERNAME}")
    String DB_USERNAME;
    @Value("${DB_PASSWORD}")
    String DB_PASSWORD;



    @Bean
    public DataSource dataSource(){
        MysqlDataSource mysqlDataSource = new MysqlDataSource();
        mysqlDataSource.setURL(DB_URL);
        mysqlDataSource.setUser(DB_USERNAME);
        mysqlDataSource.setPassword(DB_PASSWORD);
        return mysqlDataSource;
    }

    @Bean
    @Profile("mysql")
    public DataService dataServiceMysql1() throws SQLException {
        return new MySqlDataServiceImpl(dataSource());

    }

    @Bean
    public ImageService imageService(){
        return new ImageService();
    }

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize("10MB");
        factory.setMaxRequestSize("10MB");
        return factory.createMultipartConfig();
    }
}
