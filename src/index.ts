const axios = require('axios');

function translate() {
   const options = {
      method: 'POST',
      url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
      params: {
         category: 'movies',
         count: '10'
      },
      headers: {
         'X-RapidAPI-Key': '2e455d68d2mshf9f256ca09da961p1b0f01jsna34e59a0aa3d',
         'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
      }
   };
   axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
         console.log(data);
      })
      .catch(function (error: any) {
         console.error(error);
      });
}

translate();