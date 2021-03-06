package com.ad.controller;


import com.ad.model.Ads;
import com.ad.service.DataService;
import com.ad.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
public class AdsController {

    @Autowired
    DataService dataService;
    @Autowired
    private ImageService imageService;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("adMaker/allAds")
    public List<Ads> getAllads() {
        return dataService.getAllAds();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "adMaker/saveNewAds",method =RequestMethod.POST)
    public List<Ads> saveNewAds(@RequestParam("productName") String name, @RequestParam("price") int price,
                                @RequestParam("image") MultipartFile image, @RequestParam("logo") MultipartFile logo) {
        System.out.println("Saving new ad with image and logo " + image.getOriginalFilename() + " - " + logo.getOriginalFilename() );
        Ads ad = new Ads(name, price, image.getOriginalFilename(),logo.getOriginalFilename());
        dataService.saveAds(ad);
        imageService.writeToFile(image);
        imageService.writeToFile(logo);
        return dataService.getAllAds();
    }

/*    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "adMaker/saveNewAd", method = RequestMethod.GET)
    public List<Ads> saveNewAd(@RequestParam("productName") String name, @RequestParam("price") int price,
                                    @RequestParam("image") String image, @RequestParam("logo") String logo) {
        Ads ad = new Ads(name, price, logo, image);
        dataService.saveAds(ad);
        return dataService.getAllAds();
    }*/
}
