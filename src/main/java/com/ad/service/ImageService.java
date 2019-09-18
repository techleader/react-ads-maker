package com.ad.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

public class ImageService {

    @Value("${IMAGES_LOCATION}")
    String IMAGES_LOCATION;

    // save uploaded file to new location
    public void writeToFile(MultipartFile file)  {

        try {
            String uploadedFileLocation = IMAGES_LOCATION + "/" + file.getOriginalFilename();
            InputStream inputStream = file.getInputStream();
            OutputStream out = new FileOutputStream(new File(
                    uploadedFileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];

            out = new FileOutputStream(new File(uploadedFileLocation));
            while ((read = inputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
