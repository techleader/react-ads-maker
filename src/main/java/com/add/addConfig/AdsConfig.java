package com.add.addConfig;


import com.add.service.DataService;
import com.add.service.ImageService;
import com.add.service.MySqlDataServiceImpl;
import com.mysql.cj.jdbc.MysqlDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
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
    String DATABASE;


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

//    @Bean
//    @Profile("mysql")
//    public DataService dataServiceMysql2() throws SQLException {
//        return new MysqlDataService(mysqlConnection());
//
//    }
//    @Bean
//    public Connection mysqlConnection() {
//        try {
//            Class.forName("org.h2.Driver");
//            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/adsmaker","root","timsp");
//            return connection;
//        } catch (Exception e) {
//            System.err.println(e.toString());
//        }
//        return null;
//    }

}
