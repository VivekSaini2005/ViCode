// MongoDB Shell Script for Language Standardization
// Run this directly in MongoDB shell or MongoDB Compass

// Update startCode language names
db.problems.updateMany(
    { "startCode.language": "C++" },
    { $set: { "startCode.$[elem].language": "cpp" } },
    { arrayFilters: [{ "elem.language": "C++" }] }
);

db.problems.updateMany(
    { "startCode.language": "c++" },
    { $set: { "startCode.$[elem].language": "cpp" } },
    { arrayFilters: [{ "elem.language": "c++" }] }
);

db.problems.updateMany(
    { "startCode.language": "Java" },
    { $set: { "startCode.$[elem].language": "java" } },
    { arrayFilters: [{ "elem.language": "Java" }] }
);

db.problems.updateMany(
    { "startCode.language": "java" },
    { $set: { "startCode.$[elem].language": "java" } },
    { arrayFilters: [{ "elem.language": "java" }] }
);

db.problems.updateMany(
    { "startCode.language": "JavaScript" },
    { $set: { "startCode.$[elem].language": "javascript" } },
    { arrayFilters: [{ "elem.language": "JavaScript" }] }
);

db.problems.updateMany(
    { "startCode.language": "javascript" },
    { $set: { "startCode.$[elem].language": "javascript" } },
    { arrayFilters: [{ "elem.language": "javascript" }] }
);

// Update referenceSolution language names
db.problems.updateMany(
    { "referenceSolution.language": "C++" },
    { $set: { "referenceSolution.$[elem].language": "cpp" } },
    { arrayFilters: [{ "elem.language": "C++" }] }
);

db.problems.updateMany(
    { "referenceSolution.language": "c++" },
    { $set: { "referenceSolution.$[elem].language": "cpp" } },
    { arrayFilters: [{ "elem.language": "c++" }] }
);

db.problems.updateMany(
    { "referenceSolution.language": "Java" },
    { $set: { "referenceSolution.$[elem].language": "java" } },
    { arrayFilters: [{ "elem.language": "Java" }] }
);

db.problems.updateMany(
    { "referenceSolution.language": "java" },
    { $set: { "referenceSolution.$[elem].language": "java" } },
    { arrayFilters: [{ "elem.language": "java" }] }
);

db.problems.updateMany(
    { "referenceSolution.language": "JavaScript" },
    { $set: { "referenceSolution.$[elem].language": "javascript" } },
    { arrayFilters: [{ "elem.language": "JavaScript" }] }
);

db.problems.updateMany(
    { "referenceSolution.language": "javascript" },
    { $set: { "referenceSolution.$[elem].language": "javascript" } },
    { arrayFilters: [{ "elem.language": "javascript" }] }
);

// Verify the updates
print("Updated problems:");
db.problems.find({}).forEach(function(problem) {
    print("\nProblem: " + problem.title);
    print("StartCode languages: " + problem.startCode.map(function(sc) { return sc.language; }));
    print("ReferenceSolution languages: " + problem.referenceSolution.map(function(rs) { return rs.language; }));
});

print("\nLanguage standardization completed!");
