export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'aab82b8e27msh25e6e443db5f786p108983jsn62dd0e51e186',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  
  export const fetchData = async (url , options) => {
    const response = await fetch(url , options);
    const data= await response.json();
    
    return data;
  }
  
  
  export const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
      },
    };