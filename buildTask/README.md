# this doc is a copy from doctors-locations.. need updating here...

## NodeJs scripts we use in our build
You may notice we do not use any task runners like gulp/grunt. We depend soly on NodeJs scripts!

## Node Task
#####file reference: [helper/nodeTask.js](helper/nodeTask.js)

The file should be self documenting. Anyway, this is a NodeJs module that provides an interface to organize running syncronous tasks. Please dont hate us for using syncronous tasks, in our very specific application, we only move files around and do string manipulations.. nothing too fancy and we want to guarantee order without complicated callbacks :)

### how we are using it
lets create a script that will log a few things: bare in mind, this is the simplest example. Take a look at buildClientlib.js for an idea


```javascript
// simpleTask.js

//fax the path as appropriate
const NodeTask = require('./helper/nodeTask');

// new NodeTask
var SomeNewTask = new NodeTask.Task('Build Doctors-locations Clientlib');

SomeNewTask.step('logging a few things',()=>{
	console.log('doing some stuff in step 1');
})

SomeNewTask.step('logging some other things',()=>{
	console.log('doing some other stuff here');
})
// call done to print ending logs
SomeNewTask.done()

```
run `node simpleTask.js`
this will produce the following log in console:

```
###########
NODE TASK: Build Doctors-locations Clientlib

## STEP: logging a few things
doing some stuff in step 1
## STEP: logging some other things
doing some other stuff here
NODE TASK: DONE
###########
```

notice how steps will log thier own description, then the logs inside the steps are also logged after that.

## Build Helper
#####file reference: [helper/buildHelper.js](helper/buildHelper.js)
This is a helper module that exports a few functions we are using in build. Those functions include things like:

* reading file name from a dir
* creating a dir
* copying files from a directory to another
* generating css.txt and js,txt for clientlibs
* ..etc

The functions in the buildHelper.js are well documented, take a look there for more details.

## Build StyleGuide
#####file reference: [buildClientlib.js](buildClientlib.js)
This NodeJs script is well documented and uses the aforementioned NodeTask. As a summary the script will do the following:

copy styleguide assets (fonts/images) into our project for us to serve them as part of our clientlib.

1. copy directory node_modules/lib/modern/assets/fonts  to our /assets/fonts
2. copy files in directory node_modules/lib/modern/assets/images and add them to the director /assets/images

```
note: step 1. overrides directory while step 2 copies files.
```

since we added the statement `@import "~styleguide/modern-webpack";` in the file `src/styles.scss`, The styleguide styles will be imported to the global styles of the app and will be added to the generated css bundle. ng-cli takes care of that as we mentioned before.
curious about the `~` [read this](https://github.com/jtangelder/sass-loader#imports)  