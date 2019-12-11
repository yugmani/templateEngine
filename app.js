// Dependencies

var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const viewPath = path.join(__dirname, './views');
app.use(express.static(viewPath));

// =============================================================
var employees = [
  
        {
            id:"01",
            designation: "manager",
            name: "zach",
            email: "zach@one.com",
            office: 100
        },
  
        {
            id: "02",
            designation: "engineer",
            name: "lulu",
            email: "lulu@two.com",
            github: "https://github.com/lulu"
        },
            
        {
            id: "03",
            designation: "engineer",
            name: "Austen",
            email: "austen@two.com",
            github: "https://github.com/austen"
            },
  

        { 
            id: "04",
            designation: "intern",
            name: "Manasalu",
            email: "manasalu@three.com",
            school: "ucla"
        },
 
    ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/manager", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/manager.html"));
});


app.get("/engineer", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/engineer.html"));
  });

app.get("/intern", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/intern.html"));
  });


// Displays all employees
app.get("/api/employees", function(req, res) {
    return res.json(employees);
  });

  //displays single employee
app.get("/api/employees/:employee", function(req, res) {
  var select = req.params.employee;

  console.log(select);

  for (var i = 0; i < employees.length; i++) {
    if (select === employees[i].id) {
      return res.json(employees[i]);
    }
  }

  return res.json(false);
});

 

// Create New Employee - takes in JSON input
app.post("/api/employees", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newEmployee = req.body;

  // Using a RegEx Pattern to remove spaces from newEmployee
  
  //newEmployee.name = newEmployee.name.replace(/\s+/g, "").toLowerCase();

  console.log(newEmployee);

  employees.push(newEmployee);

  res.json(newEmployee);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
