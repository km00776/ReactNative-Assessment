 const getApi = async() => {
    try {
      let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
      let json = await response.json();
      console.log(json);
      let newArr = [];
      for(let i = 0; i < json.photos.length; i++) {
          newArr.push(json.photos[i]);
      }
      return newArr;
    }
    catch(error) {
      console.log(error);
    }
  }

  export default getApi;