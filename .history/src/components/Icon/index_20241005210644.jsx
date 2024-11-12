import spriteUrl from "../../Assets/sprite.svg";

// eslint-disable-next-line react/prop-types
const Icon = ({id,className}) => {
  return (
    <svg className={className}>
      <use xlinkHref={spriteUrl + "#" + id} />
    </svg>
  )
}

export default Icon;
