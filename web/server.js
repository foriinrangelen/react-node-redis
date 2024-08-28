const os = require('os');
const express = require('express');
const cors = require('cors'); // CORS 패키지 추가
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

// CORS 설정
app.use(cors());

app.get('/api', function(req, res) {
    redisClient.get('numVisits', function(err, numVisits) {
        let numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
        res.send({
            hostName: os.hostname(),
            visitNumber: numVisitsToDisplay,
        });

        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});