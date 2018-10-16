var express = require('express');
var router = express.Router();
var fs = require("fs");
var guid = require('guid');

const file = './routes/data/todo.json';

router.get('/todo/list', function (req, res, next) {
  const result = JSON.parse(fs.readFileSync(file));
  setTimeout(function(){
    res.json(result);
  }, 500);
});

router.post('/todo/remove/:id', function (req, res, next) {
  const id = req.params.id;
  const result = fs.readFileSync(file);
  let list = JSON.parse(result);
  list = list.filter(item => item.id !== id);
  fs.writeFileSync(file, JSON.stringify(list));
  res.json({ success: true });
});
 
router.post('/todo/change/:id', function (req, res, next) {
  const id = req.params.id;
  const result = fs.readFileSync(file);
  let list = JSON.parse(result);
  const item = list.find( item => item.id === id);
  item.checked = !item.checked;
  fs.writeFileSync(file, JSON.stringify(list));
  res.json({ success: true });
});

router.post('/todo/add', function (req, res, next) {
  var name = req.body.name;
  
  const result = fs.readFileSync(file);
  let list = JSON.parse(result);
  console.log(list);
  list.push({ id: guid.raw().replace(/-/gi,''), title: name, checked: false });
  fs.writeFileSync(file, JSON.stringify(list));
  setTimeout(function(){
    res.json({ success: true });
  }, 500);
});

module.exports = router;