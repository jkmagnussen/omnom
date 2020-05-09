const apiKey = 'zNF2v0CLL_FQEYCrBOu7ni5YBYEI5J4Gh1k5i4i_3tvBghBma8uIs295MK6RqcA_rfDstqGevE1UA60uJu4xLxb3n4OqsMfrvDTlUFoAncp9MjaGDFLBEqCyT_m2XnYx';

const yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.reviewCount
          }
        })
      }
    }).catch(function(error){
      console.log(error)
    })
  }
}

export default yelp;