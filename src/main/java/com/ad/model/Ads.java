package com.ad.model;

public class Ads {

   public  String productName;
   public int price;
    public String image;
    public String logo;

    public Ads(){

    }
    public Ads(String productName, int price, String image, String logo) {
        this.productName = productName;
        this.price = price;
        this.image = image;
        this.logo = logo;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLogo() {
        return logo;
    }


    public void setLogo(String logo) {
        this.logo = logo;
    }


    @Override
    public String toString() {
        return "Ads{" +
                "productName='" + productName + '\'' +
                ", price=" + price +
                ", image='" + image + '\'' +
                ", logo='" + logo + '\'' +
                '}';
    }
}
