import React from "react";
import styles from "./infoContainer.module.scss";
import Info from "./info";

import { data } from "../data/data";

const InfoContainer: React.FunctionComponent = () => {
    return (
        <article className={styles.info_container}>
            <div className={styles.info_wrap}>
                <div className={styles.info_heading}>
                    <h2> Check out our most popular courses!</h2>
                </div>
                {data.map(item => (
                    <Info
                        key={item.id}
                        icon={item.icon}
                        header={item.header}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </article>
    );
};

export default InfoContainer;
