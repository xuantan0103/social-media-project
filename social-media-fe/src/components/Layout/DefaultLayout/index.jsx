import Header from "../../Header";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import LeftBar from "../../LeftBar";
import RightBar from "../../RightBar";

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
        <div className="d-flex justify-content-center ">
          <div
            className={
              cx("left-bar") + " justify-content-left pt-4 col-lg-2 "
            }
          >
            <LeftBar />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className={cx("content-wrapper")}>{children}</div>
          </div>
          <div className={cx("right-bar") + " col-lg-2 pt-4 "}>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
