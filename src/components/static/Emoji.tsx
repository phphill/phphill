export function Emoji(props: any) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
      style={{fontSize: props.size}}
    >
      {props.symbol}
    </span>
  );
}
