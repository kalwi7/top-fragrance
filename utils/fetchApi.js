import axios from "axios";

export const baseUrl = "https://sephora.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "aeb37c5c2fmsh81400084abb909ap1ecbbcjsn1b22fdba0cfc",
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  });

  return data;
};

//aeb37c5c2fmsh81400084abb909ap1ecbbcjsn1b22fdba0cfc

//a20e74abd6msh01ab088a4f90f5cp1968fajsn0c5dae504aad
