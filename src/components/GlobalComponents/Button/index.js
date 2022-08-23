import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Styles from "./Button.module.scss";
const cx = classNames.bind(Styles);

function Button({
  children,
  primary,
  outline,
  small,
  text,
  to,
  href,
  onClick,
  disable,
  className,
  style,
}) {
  let Cmp = "button";
  const props = { onClick };

  if (to) {
    props.to = to;
    Cmp = Link;
  }
  if (href) {
    props.href = href;
    Cmp = "a";
  }

  const classNames = cx("btn", { primary, outline, small, text, disable });

  return (
    <Cmp
      style={style}
      className={classNames.concat(" ", `${className}`)}
      {...props}
    >
      {children}
    </Cmp>
  );
}

export default Button;
