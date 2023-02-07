const OpinionItem = ({ opinions: { name, text } }) => (
  <li>
    <span>{name}</span>
    <p>{text}</p>
  </li>
);

export default OpinionItem;
