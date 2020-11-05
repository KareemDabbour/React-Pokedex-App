import React from "react";
import { PageHeader } from "antd";
import styles from "./Header.module.scss";
import image from "./header.jpg";

const Header = () => {
  return (
    <div className={styles.Header}>
      <PageHeader title="Pokédex">
        <img className={styles.Image} src={image} alt="example" />
      </PageHeader>
    </div>
  );
};

export default Header;
