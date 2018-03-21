import app from "./app";

// Take the Heroku port or our own port for local dev
const port = process.env.PORT || 4040;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});