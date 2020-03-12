const apiKey = "-tdy_gdsEij9Iw3FI1Mi7_ttTqjNWqpYSenbBdDMpFmk1Z0or8z7YXLcC2BoIrizN00WFpDKbF0iZlWsZy13vhz-ywQzy7lA7Usq9o1usp8sD7fwlg3hDSsT82NoXnYx";
const yelpVars = {
    webAddr: "https://api.yelp.com/v3/businesses/",
    fSearch: "search?"
};
const corsAnywhereAddr = "https://cors-anywhere.herokuapp.com/";

const headers = {
    Authorization: `Bearer ${apiKey}`
}

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
                            address: business.address1,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count 
                        };
                    });
                } else {
                    return [];
                };
            });
    },
};

