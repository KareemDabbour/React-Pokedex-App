import React from "react";
import { PageHeader } from "antd";
import styles from "./Header.module.scss";
import image from "./header.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <PageHeader
        title={<h1 style={{ color: "white", textAlign: "center" }}>Pokédex</h1>}
      >
        <img className={styles.Image} src={image} alt="example" />
      </PageHeader>
    </div>
  );
};

export default Header;
