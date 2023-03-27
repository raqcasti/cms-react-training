import React from "react";
import classes from "../../styles/Comics/ComicDetail.module.css";
import { Creator } from "../../types/shared_types";
import { getCreators, getDate } from "./detail-utilities";

type DetailProps = {
    issueNumber: number;
    publishDate: string;
    creators: Creator;
};

export const Detail = ({ issueNumber, publishDate, creators }: DetailProps) => {
    return (
        <ul className={classes["list"]}>
            <li className={classes["list__item"]} data-testid="issue">
                <span className={classes["lead"]}>Issue: </span>{issueNumber}
            </li>
            <li
                className={classes["list__item"]}
                data-testid="published-date"
            >
                <span className={classes["lead"]}>Published: </span>
                {getDate(publishDate)}
            </li>
            <li
                className={classes["list__item"]}
                data-testid="creator-names"
            >
                <span className={classes["lead"]}>Creators: </span>
                {getCreators(creators)}
            </li>
        </ul>
    );
};