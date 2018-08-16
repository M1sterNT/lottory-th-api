import express from 'express'
import routes  from './routes';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('MisterNT Service! <a href="https://www.facebook.com/winnick.nt">MisterNT</a>'))
app.use('/', routes);

app.use((req, res, next) => {
    return res.json('MisterNT_ECHO_404_NOT_FOUND')
});

const port = normalizePort(process.env.PORT || '3000');

function normalizePort(val) {
    const port = parseInt(val, 10);
     if (isNaN(port)) return val;
     if (port >= 0) return port;
     return false;
  }


app.listen(port, () => console.log('app listening on port ' + port))

