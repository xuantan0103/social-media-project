import { faL } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  rounded = false,
  circle = false,
  item = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const _props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith("on") && typeof _props[key] === "function") {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    rounded,
    circle,
    primary,
    item,
    text,
  disabled,
    small,
    large,
  });

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
