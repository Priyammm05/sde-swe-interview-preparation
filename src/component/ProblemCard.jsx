import React from "react";
import { styles, difficultyColors } from "../utils/constants";

const ProblemCard = ({ problem, solved, toggleSolve, onProblemClick }) => (
  <div style={styles.card} onClick={() => onProblemClick(problem)}>
    <div style={styles.header}>
      <div style={styles.titleSection}>
        <input
          type="checkbox"
          style={styles.checkbox}
          checked={solved}
          onChange={(e) => {
            e.stopPropagation();
            toggleSolve(problem.id);
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <div>
          <a
            href={problem.link}
            style={styles.title}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {problem.name}
          </a>
          <div style={styles.tags}>
            <span
              style={{
                ...styles.tag,
                ...styles.difficultyTag,
                backgroundColor: difficultyColors[problem.difficulty].bg,
                color: difficultyColors[problem.difficulty].text,
              }}
            >
              {problem.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style={styles.approach}>
      <span style={{ fontWeight: "500", color: "#374151" }}>Approach: </span>
      {problem.approach}
    </div>
  </div>
);

export default ProblemCard;
