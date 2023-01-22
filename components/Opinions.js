import classes from "./CommentForm.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Opinions = () => {
  const [opinions, setOpinions] = useState();

  useEffect(() => {
    const loadedOpinions = [];

    axios
      .get(
        "https://react-training-fffc3-default-rtdb.europe-west1.firebasedatabase.app/opinions.json"
      )
      .then(function (response) {
        for (const key in response) {
          loadedOpinions.push({
            id: response[key].id,
            name: response[key].name,
            text: response[key].opinion,
          });
        }
        setOpinions(loadedOpinions);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

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
      {console.log({ opinions })}
    </section>
  );
};

export default Opinions;
