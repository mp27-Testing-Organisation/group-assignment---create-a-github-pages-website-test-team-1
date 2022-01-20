---
status-success: ':white_check_mark:'
status-fail: ':x:'
activity1-success: "Pages enabled. Your site is available at: [\\${pagesurl}](\\${pagesurl})"
activity1-fail: |
  Pages not enabled. Use the \`main\` branch and \`/docs\` folder for site contents.
  
  When enabled, your site will be available at: \`https://<org name>.github.io/<repo name>\`

  (To learn more about enabling a GitHub Pages site see [Creating your site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) in the GitHub Docs.)
activity1-fail-2: |
  Pages enabled, but configured for \`\${pages-branch}\` branch and \`\${pages-path}\` folder. Use the \`main\` branch and \`/docs\` folder for site contents.

  (See [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for details on how to configure the correct publishing source.)
activity2-success: Yay. Everyone in the team has added a file and made a commit.
activity2-fail: |
  Not everyone has made a commit. The following team members have not added a file and made a commit:
  \${no-commit-members}
  
  <details>
    <summary>How to make a git commit</summary>
    
    **Clone** - [Clone](https://github.com/git-guides/git-clone) the repository to your local machine.

    \`\`\`
    git clone https://github.com/${GITHUB_REPOSITORY}.git
    \`\`\`

    **Edit** - Edit and save the files.

    \`\`\`
    cd ${REPO_NAME}
    code editme.md
    \`\`\`

    **Add** - [Add](https://github.com/git-guides/git-add) the changes to staging.
    
    \`\`\`
    git add editme.md
    \`\`\`

    **Commit** - [Commit](https://github.com/git-guides/git-commit) the changes to the git repo.

    \`\`\`
    git commit -m \"asked a question in editme.md\"
    \`\`\`

    **Push** - [Push](https://github.com/git-guides/git-push) the new commits back to the remote repository.

    \`\`\`
    git push origin main
    \`\`\`
  </details>
activity3-success: Yay. Everyone in the team has opened a Pull Request.
activity3-fail: |
  Not everyone has opened a Pull Request. The following team members have not opened a Pull Request:
  \${no-pr-members}
activity4-success: Everyone in the team has commented on someone else's Pull Request.
activity4-fail: |
  Not everyone has reviewed another's Pull Request. The following team members have not reviewed a Pull Request:
  \${no-comment-members}
activity5-success: Everyone in the team has authored a merge commit.
activity5-fail: |
  Not everyone has authored a merge commit. The following team members have not authored a merge commit:
  \${no-merge-members}
---

## Auto-Feedback

### Tasks

#### ${status-activity1} Activity 1 - Enable GitHub Pages

${fb-activity1}

#### ${status-activity2} Activity 2 - Make Commit

${fb-activity2}

#### ${status-activity3} Activity 3 - Make Pull Request

${fb-activity3}

#### ${status-activity4} Activity 4 - Review Pull Request

${fb-activity4}

#### ${status-activity5} Activity 5 - Merge Commit

${fb-activity5}

### Team Members

${team-members}

#### Contribution Stats

| Member | Commits | % Commits | Lines | % Lines | Overall |
| :--- | ---: | ---: | ---: | ---: | ---: |
${team-stats}

<details>
    <summary>details</summary>

    svg image?

</details>

Autograding Score: ${points}
