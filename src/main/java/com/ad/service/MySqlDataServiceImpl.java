package com.ad.service;

import com.ad.model.Ads;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class MySqlDataServiceImpl implements DataService {

    @Value("${IMAGES_LOCATION}")
    static String IMAGES_LOCATION;
    private DataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    public MySqlDataServiceImpl(DataSource dataSource) {
        this.dataSource = dataSource;
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Ads> getAllAds() {
        String SQL = "select * from ads";
        List<Ads> adsList = jdbcTemplate.query(SQL,
                new RowMapper<Ads>() {
                    @Override
                    public Ads mapRow(ResultSet rs, int i) throws SQLException {
                        Ads ads = new Ads();
                        ads.setProductName(rs.getString("productName"));
                        ads.setPrice(rs.getInt("price"));
                        ads.setLogo(rs.getString("logo"));
                        ads.setImage(rs.getString("image"));

                        return ads;
                    }
                });
        return adsList;
    }
    @Override
    public boolean saveAds(Ads ads) {
        String productName = ads.getProductName();
        int price = ads.getPrice();
        String image = ads.getImage();
        String logo = ads.getLogo();
        String update = "INSERT INTO adsmaker.ads (productName, price, logo, image) VALUES(?,?,?,?);";
        System.out.println("Saving Ads : " + ads);
        jdbcTemplate.update(update, new Object[]{productName, price, logo, image});
        return false;
    }

}
