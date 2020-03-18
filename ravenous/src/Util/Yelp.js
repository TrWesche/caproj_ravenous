import { apiKey } from './hiddenKey';

const yelpVars = {
    webAddr: "https://api.yelp.com/v3/businesses/",
    fSearch: "search?"
};
const corsAnywhereAddr = "https://cors-anywhere.herokuapp.com/";

const headers = {
    Authorization: `Bearer ${apiKey}`
}

const gmapAddr = 'http://maps.google.com/maps?q=';

export const Yelp = {
    search: async function(term, location, sortBy) {
        let webAddr = `${corsAnywhereAddr}${yelpVars.webAddr}${yelpVars.fSearch}term=${term}&location=${location}&sort_by=${sortBy}`;
        return await fetch(webAddr, {headers})
            .then(respone => {
                return respone.json()} )
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business,
                            imageSrc: business.image_url,
                            name: business.name,
                            phone: business.phone,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                            mapUrl: `${gmapAddr}${business.name}+${business.location.address1}+${business.location.city}+${business.location.state}+${business.location.zip_code}`
                        };
                    });
                } else {
                    return [];
                };
            });
    },
};

