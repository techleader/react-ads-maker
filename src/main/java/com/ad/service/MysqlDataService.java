package com.ad.service;

import com.ad.model.Ads;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class MysqlDataService implements DataService {

    Connection connection;
    PreparedStatement preparedStatement;

    public MysqlDataService(Connection connection) {
        this.connection =connection;
    }

    @Override
    public boolean saveAds(Ads adds) {

        String query = FileService.readFileToString("E:/workspace/ad/src/main/resources\\sqlQueries\\insertQuery.sql");
       try{
            preparedStatement =connection.prepareStatement(query);
            preparedStatement.setString(1,adds.getProductName());
            preparedStatement.setInt(2,adds.getPrice());
            preparedStatement.setString(4,adds.getLogo());
            preparedStatement.execute();

           System.out.println("Inserted records into the table...");


        }catch (Exception err){
            err.printStackTrace();
        }
        return false;
    }

    public List<Ads> getAllAds() {
                String sql ="Select * from ads";

                List<Ads> list = new ArrayList<>();
                try{
                    preparedStatement =connection.prepareStatement(sql);
                    ResultSet rs = preparedStatement.executeQuery();
                    while(rs.next()){
                        Ads adds = new Ads();

                        adds.setProductName(rs.getString("productName"));
                        adds.setPrice(rs.getInt("price"));
                        adds.setLogo(rs.getString("logo"));
                     //  adds.setImage(getImages(rs.getInt("adsid")));
                        list.add(adds);
                    }


                }catch (Exception err){
                    err.printStackTrace();
                }

        return list;
    }



    public Ads getAds() {
        return null;
    }

    public String[] getImages(int id){

        String image[] =new String[4];
        String sql ="SELECT * FROM productimage\n" +
                "where adsid='"+id+"'";
        try{
            preparedStatement =connection.prepareStatement(sql);
            ResultSet rs = preparedStatement.executeQuery();
            int i=0;
            while(rs.next()){

                image[i] = rs.getString("imageurl");
                i++;
            }

        }catch (Exception err){
            err.printStackTrace();
        }
        return image;
    }

}
