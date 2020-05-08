const chokidar = require('chokidar');

const ignored = [
  "**/node_modules/**",
  "**/.*"
]

const watcher = chokidar.watch('.', {
  ignored,
  ignoreInitial: true,
  cwd
});

watcher.on('add', path => console.log(path))
watcher.on('change', path => console.log(path))

