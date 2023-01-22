import { useRef, useState } from "react";
import classes from "./CommentForm.module.css";
import axios from "axios";

//Możliwość usprawnienia z useState - lepsze ux, teraz areValide jest true na początku 220 lekcja
const CommentForm = ({ id }) => {
  const nameInput = useRef();
  const opinionInput = useRef();
  const [inputsAreValid, setInputsAreValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sumbmitComplet, setSumbmitComplet] = useState(false);

  const submitDataHandler = async (id, name, opinion) => {
    setIsSubmitting(true);
    await axios
      .post(
        "https://react-training-fffc3-default-rtdb.europe-west1.firebasedatabase.app/opinions.json",
        {
          id: id,
          name: name,
          opinion: opinion,
        }
      )
      .then(function (response) {
        setIsSubmitting(false);
        setSumbmitComplet(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredOpinion = opinionInput.current.value;

    if (enteredName.trim() === "" || enteredOpinion.trim() === "") {
      setInputsAreValid(false);
      return;
    }

    setInputsAreValid(true);

    submitDataHandler(id, enteredName, enteredOpinion);
  };

  const InputClasses = !inputsAreValid
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const formContent = (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={InputClasses}>
        <label htmlFor="name">Name</label>
        <input ref={nameInput} type="text" id="name" />
        <label htmlFor="opinion">Your opinion</label>
        <textarea
          ref={opinionInput}
          id="opinion"
          name="opinion"
          rows="5"
          cols="33"
        ></textarea>
        {!inputsAreValid && (
          <p className={classes.invalidText}>Fill all the fields!</p>
        )}
      </div>
      <div className={classes.formActions}>
        <button>Submit</button>
      </div>
    </form>
  );

  const inSubmittingFormContent = (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <p>Sending data...</p>;
    </form>
  );

  const SubmittingCompletedContent = (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <p>Thank You for opinion!</p>
    </form>
  );

  return (
    <>
      {!isSubmitting && !sumbmitComplet && formContent}
      {isSubmitting && inSubmittingFormContent}
      {sumbmitComplet && SubmittingCompletedContent}
    </>
  );
};

export default CommentForm;
