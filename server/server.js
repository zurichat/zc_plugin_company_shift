require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5356;


app.use(express.static(path.join(__dirname, "..", "client", "build")));

//app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req,res)=> {
  return res.json({
    message: 'Employee Shift API Success!!!'
  });
});

// categories employees roles api issue #97
app.get('/api/users', (req,res)=> {
  return res.json([
    {
      id: 1,
      name: 'Ushahemba Shir',
      title: 'Back end dev'
    },
    {
      id: 2,
      name: 'Solomon Ifianyi',
      title: 'Back end dev'
    },
    {
      id: 3,
      name: 'Depecode',
      title: 'Front end dev'
    },
    {
      id: 4,
      name: 'John',
      title: 'Dev ops'
    }
  ])
})


//render react app index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

