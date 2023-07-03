const express = require('express');
const app = express();

const port = 3000;
const hostName = '127.0.0.1';

const myMiddleware = (req, res, next) =>{
    console.log(`Middleware function`);
    req.currentTime = new Date(Date.now());
    next()
};
app.use(myMiddleware);
// app.get('/', myMiddleware, (req, res)=>{
//     res.send('hi i am home page');
//     console.log('i am home ' + req.currentTime);
// });
app.get('/', (req, res)=>{
    res.send('hi i am home page');
    console.log('i am home ' + req.currentTime);
});

app.get('/about', (req, res)=>{
    res.send('hi i am about page');
    console.log('i am about ' + req.currentTime);
});
// Error handling middleware
app.use((req, res, next)=>{
    res.send('404 Error!! page not found')
});
// Others error handling middleware
app.use((err, req, res, next)=>{
    res.status(500).send('something broke')
});
app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})

