package com.add.service;

import com.add.model.Ads;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.imageio.ImageIO;
import javax.sql.DataSource;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class MySqlDataServiceImpl implements DataService {

	@Value("${IMAGES_LOCATION}")
	static String IMAGES_LOCATION ="C:\\Users\\pc\\Downloads";
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplate;

	public MySqlDataServiceImpl(DataSource dataSource) {
		this.dataSource = dataSource;
		jdbcTemplate = new JdbcTemplate(dataSource);
	}


	@Override
	public List<Ads> getAllAds() {
		String SQL = "select * from adsmaker.ads";
		List <Ads> adsList = jdbcTemplate.query(SQL,
				new RowMapper<Ads>() {
					@Override
					public Ads mapRow(ResultSet rs, int i) throws SQLException {
						Ads ads = new Ads();
						ads.setProductName(rs.getString("productName"));
						ads.setPrice(rs.getInt("price"));
						ads.setLogo(rs.getString("logo"));
						ads.setImage(rs.getString("imageUrl"));

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

		String update = "INSERT INTO adsmaker.ads (productName, price, logo, imageUrl) VALUES(?,?,?,?);";
		System.out.println("Saving Ads : " + ads);
		jdbcTemplate.update(update,new Object[]{productName ,price,logo,image});
		return false;
	}

	@Override
	public Ads getAds() {
		return null;
	}

	public String getImages(int id){

		String image ="";

		/*String sql ="SELECT * FROM productimage\n" +
				"where adsid='"+id+"'";
		try{
			*//*preparedStatement =connection.prepareStatement(sql);
			ResultSet rs = preparedStatement.executeQuery();
			int i=0;
			while(rs.next()){

				image = rs.getString("imageurl");
				i++;*//*
			}

		}catch (Exception err){
			err.printStackTrace();
		}*/
		return image;
	}

	public static byte[] getImage(String imagename) {

		String keyId= imagename.split("[.]")[0];
		String imageType=imagename.split("[.]")[1];


		try {
			BufferedImage img=  ImageIO.read(new File(IMAGES_LOCATION  + "/"+keyId+"."+imageType));
			ByteArrayOutputStream bao = new ByteArrayOutputStream();
			ImageIO.write(img, "jpg", bao);
			return bao.toByteArray();
		} catch(IOException e) {
			System.out.println(e.toString());
			throw new RuntimeException("Unable to load image : " + keyId);
		}
	}

	public static void main(String[] args) {

		}


}
