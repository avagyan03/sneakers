import spriteUrl from "../../Assets/sprite.svg";

// eslint-disable-next-line react/prop-types
const Icon = ({id}) => {
  return (
    <svg>
      <use xlinkHref={spriteUrl + "#" + id} />
    </svg>
  )
}

export default Icon;
