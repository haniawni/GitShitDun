# GitShitDun
Tools for: GITTIN SHEET DUN

## Usage:
	gsd -h

## Installation:
1. npm install for all packages listed
2. append the following into your ~/.bashrc or ~/.zshrc or whatever:
	```
    # GIT SHIT DONE RIGHT HERE

	export GSD_PATH="/Users/hawni/Documents/workspace/GitShitDun"
	alias gsd="node $GSD_PATH/gsd_local.js"
	```
3. Open a new terminal (or: source your bashrc or zshrc)

## Requirements:

- [yargs](https://www.npmjs.com/package/yargs)
- [moment](https://www.npmjs.com/package/moment)
- [node-notifier](https://github.com/mikaelbr/node-notifier)
- [open](https://www.npmjs.com/package/open)
