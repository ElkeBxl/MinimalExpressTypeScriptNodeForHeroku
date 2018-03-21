# MinimalExpressTypeScriptNodeForHeroku

## Steps to follow

1. Download Heroku CLI and install
2. Open terminal and execute "heroku login"
3. Make sure node, git, npm, typescript and ts-node are installed
4. Clone this repository
5. Create new heroku app with "heroku create xxx" with xxx = the name of the app
6. npm udpate
7. git push heroku master
8. If the app is deployed correctly, you'll be able to open it with "heroku open"
9. For local dev you can use "ts-node ./src/server.ts"