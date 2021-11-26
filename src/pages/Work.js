import React from "react";
import Project from '../components/Project'

const styles = {
    page: {
        background: "#CFA5A5",
        margin: "1em",
        padding: "1em",
    },
    p: {
        textAlign: "center",
        fontSize: "2em",
    },
}

export default function Portfolio() {
    return (
        <div style={styles.page}>
            <p style={styles.p}>Work</p>
            <Project />
        </div>
    );
};