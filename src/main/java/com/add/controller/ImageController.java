package com.add.controller;

import com.add.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.List;


@RestController
public class ImageController {

    @Value("${IMAGES_LOCATION}")
    String IMAGES_LOCATION;

    @Autowired
    private ImageService imageService;


    @RequestMapping(value = "/adelement/images/{keyId}.{imageType}",headers="Accept=image/jpeg, image/jpg, image/png, image/gif")
    @ResponseBody
    public byte[] getImage(@PathVariable String keyId,@PathVariable String imageType) {
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

    @RequestMapping(value = "/adelement/images/list")
    public String[] getAllImagesNames(){
        List<String> images = new ArrayList<>();
        File file = new File(IMAGES_LOCATION);
        return file.list(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return !name.endsWith("thumbnail");
            }
        });
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/adelement/image/upload",  consumes = MediaType.MULTIPART_FORM_DATA_VALUE,method =RequestMethod.POST)
    public boolean uploadImage(@RequestParam("file") MultipartFile file){
        System.out.println("File to uploaded " + file.getOriginalFilename());
        try {
            imageService.writeToFile(file);
        }catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to upload image", e);
        }
        return true;
    }






}
