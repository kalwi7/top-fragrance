import classes from "./CommentForm.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Opinions = ({id, opinions}) => {
  // const [opinions, setOpinions] = useState();


  // useEffect(() => {
  //   const loadedOpinions = [];

  //   axios
  //     .get(
  //       "https://react-training-fffc3-default-rtdb.europe-west1.firebasedatabase.app/opinions.json"
  //     )
  //     .then(function (response) {
  //       for (const key in response.data) {
  //         loadedOpinions.push({
  //           id: response.data[key].id,
  //           name: response.data[key].name,
  //           text: response.data[key].opinion,
  //         });
  //       }
  //       setOpinions(loadedOpinions.filter( opinion => opinion.id === id));
  //       // const currentProductOpinions = opinions.filter( opinion => opinion.id === id )
  //       console.log(opinions)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }, []);

  // useEffect(() => {
  //   setOpinionsContent(opinions?.map(opinion => {
  //     <ul>
  //       <li>gg
  //          <span>{opinion.name}</span> 
  //          <p>{opinion.opinion}</p>
  //       </li>
  //     </ul>
  //   }))}
  // , [])

  //   const opinionsList = opinions.map((opinion) => (
  //     <OpinionItem
  //       key={opinion.id}
  //       id={opinion.id}
  //       name={opinion.name}
  //       text={opinion.text}
  //     />
  //   ));

 

  return (
    <section>
      <ul>Opinie</ul>
      {console.log(opinions)}
    </section>
  );
};


export async function getStaticProps() {
  const loadedOpinions = [];

  axios
    .get(
      "https://react-training-fffc3-default-rtdb.europe-west1.firebasedatabase.app/opinions.json"
    )
    .then(function (response) {
      for (const key in response.data) {
        loadedOpinions.push({
          id: response.data[key].id,
          name: response.data[key].name,
          text: response.data[key].opinion,
        });
      }
      // setOpinions(loadedOpinions.filter( opinion => opinion.id === id));
      // const currentProductOpinions = opinions.filter( opinion => opinion.id === id )
      // console.log(opinions)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return {
    props: {
      opinions: loadedOpinions.filter( opinion => opinion.id === id),
    },
  };
}

export default Opinions;
