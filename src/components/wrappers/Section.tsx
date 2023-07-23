import React, { ReactNode } from "react";
import styles from './Section.module.css';

type sectionProps = {
    heading: string,
    children: ReactNode,
    sectionId: string
};

const Section = function ({ heading, children, sectionId }: sectionProps) {
    return (
        <section id={sectionId} className={styles.section}>
            <div className={styles.sectionHeading}>{heading}</div>
            <div className={styles.sectionContent}>{children}</div>
        </section>
    );
}

export default Section;