// gather and return user stats from repo commits

module.exports = async ({github, context, core}) => {
    const cp = require('child_process');

    // commit authors to ignore
    const ignoreAuthors = [
        'GitHub Action',
        'github-classroom[bot]',
        'Not Committed Yet'
    ];

    // get commit count per author
    const commitCount = cp
        .execSync("git shortlog -s -n --all --no-merges")
        .toString()
        .trim()
        .split(/\r?\n/);
    //console.log(commitCount);

    let stats = Object.assign({}, ...commitCount.map(element => {
        e = element.trim().split(/(?<=^\S+)\s/);
        if (!ignoreAuthors.includes(e[1])) return ({[e[1]]: {'commits': e[0]}});
        })
    );
    //console.log(stats);

    // get line count per author
    const lineCount = cp
        .execSync("git ls-files | xargs -d '\n' -n1 git blame --line-porcelain | sed -n 's/^author //p' | sort -f | uniq -ic")
        .toString()
        .trim()
        .split(/\r?\n/);
    //console.log(lineCount);

    // merge lines into stats
    for (item of lineCount) {
        e = item.trim().split(/(?<=^\S+)\s/);
        if (ignoreAuthors.includes(e[1])) continue;
        stats[e[1]]['linecount'] = e[0]
    }
    console.log(`Commit and line stats: ${stats}`);

    // // get hours
    // hours = cp
    // .execSync("git-hours")
    // .toString()
    // .trim();
    // hours = JSON.parse(hours);
    // console.log(hours);

    // // merge hours into stats
    // for (item in hours) {
    //     if (item == 'total') continue;
    //     stats[hours[item].name]['hours'] = hours[item].hours
    // }
    // console.log(stats);

    // get GitHub username
    for (item in stats) {
        // get last commit SHA
        lastSHA = cp
            .execSync(`git log -1 --all --author="${item}" --pretty=format:"%H"`)
            .toString()
            .trim()
        //console.log(lastSHA);

        if (lastSHA.length) {
            // get commit from GitHub
            const res = await github.rest.repos.getCommit({
                owner: context.repo.owner,
                repo: context.repo.repo,
                ref: lastSHA,
            });
            console.log(`Get commit response for ${item}: ${res.status}`);
            //console.log(res.data.author.login);
            stats[item]['username'] = res.data.author.login || 'unknown';
        }
    }
    //console.log(stats);

    // map stats to GH usernames
    const userStats = Object.keys(stats).reduce((r,a) => {
        e = stats[a];
        r[e.username] = r[e.username] || {};

        for (k in e) {
            if (k == 'username') continue;
            // console.log(k)
            r[e.username][k] = (r[e.username][k]) ? r[e.username][k] + parseInt(e[k]) : parseInt(e[k]);
        }
        return r;
    }, {});
    console.log(`User stats: ${userStats}`);
    return userStats;
}
