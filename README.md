# typescriptlab
Nested package dependencies, l1, l2, l3, build into a single AMD module (l3/dist/index.js)

# Caveats
This is a trial-and-error experiment in managing a development environment composed of multiple typescript projects.
I've been having to `git push` changes in sub-projects in order to `npm install` them into parent projects.
I am experimenting with `npm install` of local folders and learning how `npm link` might help.

# Version 1.0.1
The `lerna` cli tool seems to be the answer to developing modules locally but publishing them as independent modules.

## Known Issues
The "watch" script only seems to work in bash, probably because of the `chokidar` path.


# Version 1.0.0
This version has three sub-projects, l1, l2, l3, each in its own folder but each in the same github repo.
The root project depends on l1, l2, l3
l3 depends on l1, l2
l2 depends on l1
l1, l2, l3 all depend on jquery

Now I would like to know how to push each project into its own git repository while preserving this development experience.
