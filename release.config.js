const branches = [
    'main',
    {
        name: 'alpha',
        prerelease: true
    }
];

const commitAnalyzer = '@semantic-release/commit-analyzer';
const releaseNotesGenerator = '@semantic-release/release-notes-generator';
const changelog = '@semantic-release/changelog';
const npm = '@semantic-release/npm';
const git = '@semantic-release/git';

module.exports = {
    branches,
    plugins: [commitAnalyzer, releaseNotesGenerator, changelog, npm, git]
};
