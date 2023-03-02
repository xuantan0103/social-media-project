import Header from "../../Header";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("header-wrapper")}>
          <Header />
        </div>
      </div>
      <div className={cx("content")}>
        <div className={cx("content-wrapper")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;