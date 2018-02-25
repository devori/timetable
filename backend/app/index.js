import express from 'express';
import bodyParser from 'body-parser';
import scheduleRouter from './router/schedule';

const app = express();

app.use(bodyParser.json());
app.use('/schedules', scheduleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).json({
        status: 'failure',
        result: 'Not Found'
    });
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        status: 'failure',
        result: err.result
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});