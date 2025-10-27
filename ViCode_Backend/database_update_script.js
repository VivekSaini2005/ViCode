// Database Update Script for Language Consistency
// Run this script to standardize language naming in your MongoDB database

const mongoose = require('mongoose');

// Connect to your MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Update language names to be consistent
const updateLanguageNames = async () => {
    try {
        const db = mongoose.connection.db;
        const problemsCollection = db.collection('problems');

        console.log('Starting language name standardization...');

        // Update startCode language names
        const startCodeUpdates = [
            // Update C++ variations
            { 
                'startCode.language': 'C++' 
            },
            { 
                $set: { 'startCode.$[elem].language': 'cpp' } 
            },
            { 
                arrayFilters: [{ 'elem.language': 'C++' }] 
            }
        ];

        await problemsCollection.updateMany(
            { 'startCode.language': 'C++' },
            { $set: { 'startCode.$[elem].language': 'cpp' } },
            { arrayFilters: [{ 'elem.language': 'C++' }] }
        );

        await problemsCollection.updateMany(
            { 'startCode.language': 'c++' },
            { $set: { 'startCode.$[elem].language': 'cpp' } },
            { arrayFilters: [{ 'elem.language': 'c++' }] }
        );

        // Update Java variations
        await problemsCollection.updateMany(
            { 'startCode.language': 'Java' },
            { $set: { 'startCode.$[elem].language': 'java' } },
            { arrayFilters: [{ 'elem.language': 'Java' }] }
        );

        await problemsCollection.updateMany(
            { 'startCode.language': 'java' },
            { $set: { 'startCode.$[elem].language': 'java' } },
            { arrayFilters: [{ 'elem.language': 'java' }] }
        );

        // Update JavaScript variations
        await problemsCollection.updateMany(
            { 'startCode.language': 'JavaScript' },
            { $set: { 'startCode.$[elem].language': 'javascript' } },
            { arrayFilters: [{ 'elem.language': 'JavaScript' }] }
        );

        await problemsCollection.updateMany(
            { 'startCode.language': 'javascript' },
            { $set: { 'startCode.$[elem].language': 'javascript' } },
            { arrayFilters: [{ 'elem.language': 'javascript' }] }
        );

        // Update referenceSolution language names
        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'C++' },
            { $set: { 'referenceSolution.$[elem].language': 'cpp' } },
            { arrayFilters: [{ 'elem.language': 'C++' }] }
        );

        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'c++' },
            { $set: { 'referenceSolution.$[elem].language': 'cpp' } },
            { arrayFilters: [{ 'elem.language': 'c++' }] }
        );

        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'Java' },
            { $set: { 'referenceSolution.$[elem].language': 'java' } },
            { arrayFilters: [{ 'elem.language': 'Java' }] }
        );

        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'java' },
            { $set: { 'referenceSolution.$[elem].language': 'java' } },
            { arrayFilters: [{ 'elem.language': 'java' }] }
        );

        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'JavaScript' },
            { $set: { 'referenceSolution.$[elem].language': 'javascript' } },
            { arrayFilters: [{ 'elem.language': 'JavaScript' }] }
        );

        await problemsCollection.updateMany(
            { 'referenceSolution.language': 'javascript' },
            { $set: { 'referenceSolution.$[elem].language': 'javascript' } },
            { arrayFilters: [{ 'elem.language': 'javascript' }] }
        );

        console.log('Language names standardized successfully!');
        
        // Verify the updates
        const updatedProblems = await problemsCollection.find({}).toArray();
        console.log('\nUpdated problems:');
        updatedProblems.forEach(problem => {
            console.log(`\nProblem: ${problem.title}`);
            console.log('StartCode languages:', problem.startCode.map(sc => sc.language));
            console.log('ReferenceSolution languages:', problem.referenceSolution.map(rs => rs.language));
        });

    } catch (error) {
        console.error('Error updating language names:', error);
    }
};

// Main execution
const main = async () => {
    await connectDB();
    await updateLanguageNames();
    await mongoose.connection.close();
    console.log('\nDatabase update completed successfully!');
};

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { updateLanguageNames };
