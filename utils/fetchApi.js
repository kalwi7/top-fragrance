import axios from "axios";
import React, { useState } from "react";

export const baseUrl = "https://sephora.p.rapidapi.com";

export const fetchApi = async (url) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(0);
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "a20e74abd6msh01ab088a4f90f5cp1968fajsn0c5dae504aad",
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  });

  // await axios
  //   .get(url, {
  //     headers: {
  //       "X-RapidAPI-Key": "a20e74abd6msh01ab088a4f90f5cp1968fajsn0c5dae504aad",
  //       "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  //     },
  //   })
  //   .then(function (response) {
  //     setIsLoading(false);
  //     console.log(response);
  //     setData(response.data);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return data;
};

//aeb37c5c2fmsh81400084abb909ap1ecbbcjsn1b22fdba0cfc
