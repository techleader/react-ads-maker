package com.add.service;


import com.add.model.Ads;

import java.util.List;

public interface DataService {
    public List<Ads> getAllAds();
    public boolean saveAds(Ads adds);
    public Ads getAds();
}
