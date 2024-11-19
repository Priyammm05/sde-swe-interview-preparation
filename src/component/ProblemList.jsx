import React, { useState, useEffect } from "react";
import ProblemCard from "./ProblemCard";
import ProblemDetailsScreen from "./ProblemDetailsScreen";
import { problems, styles } from "../utils/constants";

const ProblemList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [solvedProblems, setSolvedProblems] = useState(
    JSON.parse(localStorage.getItem("solvedProblems")) || []
  );
  const [selectedProblem, setSelectedProblem] = useState(null);

  useEffect(() => {
    localStorage.setItem("solvedProblems", JSON.stringify(solvedProblems));
  }, [solvedProblems]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSolve = (id) => {
    const updatedSolvedProblems = solvedProblems.includes(id)
      ? solvedProblems.filter((problemId) => problemId !== id)
      : [...solvedProblems, id];

    setSolvedProblems(updatedSolvedProblems);
  };

  const filteredProblems = problems.filter(
    (problem) =>
      problem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.pattern.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedProblems = filteredProblems.reduce((groups, problem) => {
    const { pattern } = problem;
    if (!groups[pattern]) {
      groups[pattern] = {
        problems: [],
        counts: { Easy: 0, Medium: 0, Hard: 0 },
      };
    }
    groups[pattern].problems.push(problem);
    groups[pattern].counts[problem.difficulty]++;
    return groups;
  }, {});

  const totalSolved = solvedProblems.length;

  if (selectedProblem) {
    return (
      <ProblemDetailsScreen
        problem={selectedProblem}
        onBack={() => setSelectedProblem(null)}
      />
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>SDE / SWE DSA QUESTIONS</h1>

      <input
        type="text"
        placeholder="Search problems..."
        style={styles.searchBar}
        value={searchQuery}
        onChange={handleSearch}
      />

      <div style={styles.stats}>
        <div style={styles.statsTitle}>
          Total Problems Solved: {totalSolved} / {problems.length}
        </div>
      </div>

      <div style={styles.height}></div>

      {Object.keys(groupedProblems).map((pattern) => {
        const patternData = groupedProblems[pattern];
        const totalPatternSolved = patternData.problems.filter((problem) =>
          solvedProblems.includes(problem.id)
        ).length;

        return (
          <div key={pattern} style={styles.patternSection}>
            <div style={styles.patternTitle}>
              {pattern} ({patternData.problems.length})
              <span>Total Solved: {totalPatternSolved}</span>
            </div>

            {["Easy", "Medium", "Hard"].map((difficulty) => {
              const problemsByDifficulty = patternData.problems.filter(
                (problem) => problem.difficulty === difficulty
              );
              const solvedCount = problemsByDifficulty.filter((problem) =>
                solvedProblems.includes(problem.id)
              ).length;

              return (
                problemsByDifficulty.length > 0 && (
                  <div key={difficulty} style={styles.difficultySection}>
                    <div style={styles.difficultyTitle}>
                      {difficulty} ({problemsByDifficulty.length}) - Solved:{" "}
                      {solvedCount}
                    </div>
                    {problemsByDifficulty.map((problem) => (
                      <ProblemCard
                        key={problem.id}
                        problem={problem}
                        solved={solvedProblems.includes(problem.id)}
                        toggleSolve={toggleSolve}
                        onProblemClick={setSelectedProblem}
                      />
                    ))}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProblemList;
