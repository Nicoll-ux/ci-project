const express = require('express');
const app = express();
app.use(express.json());
let tasks = [];
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
  });
app.get('/tasks', (req, res) =>  {
    res.json(tasks);
});
app.post('/tasks', (req, res) => {
    const task = { id: Date.now(), name: req.body.name };
    tasks.push(task);
    res.status(201).json(task);
});
module.exports = app;
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.status(204).send();
  });