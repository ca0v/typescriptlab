# typescriptlab
Nested package dependencies, l1, l2, l3, build into a single AMD module (l3/dist/index.js)

# Caveats
This is a trial-and-error experiment in managing a development environment composed of multiple typescript projects.
I've been having to `git push` changes in sub-projects in order to `npm install` them into parent projects.
I am experimenting with `npm install` of local folders and learning how `npm link` might help.

# Version 1.0.0
This version has three projects, l1, l2, l3, each in its own folder but each in the same npm package.  
I would like to have the ability to push them into their own npm packages but keep the development experience I have with this version.
