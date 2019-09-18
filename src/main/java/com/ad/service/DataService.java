package com.ad.service;


import com.ad.model.Ads;

import java.util.List;

public interface DataService {
    public List<Ads> getAllAds();
    public boolean saveAds(Ads adds);
}
