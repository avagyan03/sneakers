import spriteUrl from "../../Assets/sprite.svg";
const Icon = ({ id }) => {
  return (
    <svg>
      <use xlinkHref={spriteUrl + "#" + id} />
    </svg>
  );
};

export default Icon;
