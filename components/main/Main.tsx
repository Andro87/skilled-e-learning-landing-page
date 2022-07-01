import React from "react";
import { Button } from "components";
import styles from "./Main.module.scss";

export const Main: React.FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_info}>
                <h1> Maximize skill, minimize budget</h1>
                <p>
                    Our modern courses across a range of in-demand skills will
                    give you the knowledge you need to live the life you want.
                </p>
                <Button color="pink" />
            </div>

            <div className={styles.main_img}>
                <img src="../images/image-hero-mobile@2x.png" alt="" />
            </div>
        </main>
    );
};
