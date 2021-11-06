module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/tests/1.test.ts'],
    setupFilesAfterEnv: ['./jest.setup.js'],
};
