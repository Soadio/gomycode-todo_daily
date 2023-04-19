import classes from "../styles/Button.module.css"

export function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
