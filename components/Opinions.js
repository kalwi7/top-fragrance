import classes from "./Opinions.module.css";
import OpinionItem from "./OpinionItem";

const Opinions = ({ id, opinions }) => {
  return (
    <ul className={classes.list}>
      {opinions.length > 0
        ? opinions.map((opinion) => {
            return <OpinionItem opinions={opinion} />;
          })
        : "There are no reviews yet"}
    </ul>
  );
};

export default Opinions;
