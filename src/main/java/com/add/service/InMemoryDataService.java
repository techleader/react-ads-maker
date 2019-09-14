package com.add.service;

import com.add.model.Ads;

import java.util.List;

public class InMemoryDataService implements DataService {

    @Override
    public List<Ads> getAllAds() {
        return null;
    }

    @Override
    public boolean saveAds(Ads adds) {
        return false;
    }

    @Override
    public Ads getAds() {
        return null;
    }
}
