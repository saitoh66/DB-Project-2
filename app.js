// Module dependencies

var express    = require('express'),
    mysql      = require('mysql'),
    http       = require('http'),
    connect    = require('connect'),
    path       = require('path');

// Application initialization

var connection = mysql.createConnection({
        host     : 'cwolf.cs.sonoma.edu',
        user     : 'ndanos',
        password : '2604438'
    });
    
var app = express();


// Database setup
//connection.query('DROP DATABASE IF EXISTS test', function(err) {
//	if (err) throw err;
//	connection.query('CREATE DATABASE IF NOT EXISTS ndanos', function (err) {
//	    if (err) throw err;
	    connection.query('USE ndanos', function (err) {
	        if (err) throw err;
//        	connection.query('CREATE TABLE IF NOT EXISTS users('
//	            + 'id INT NOT NULL AUTO_INCREMENT,'
//	            + 'PRIMARY KEY(id),'
  //      	    + 'username VARCHAR(30),'
//		    + 'password VARCHAR(30)'
//	            +  ')', function (err) {
//        	        if (err) throw err;
//	            });
//	    });
	});
//});


// Configuration

app.use(connect.urlencoded());
app.use(connect.json());

// Main route sends our HTML file

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/dropAsia.html', function(req, res) {
  res.sendfile(__dirname + '/dropAsia.html');
});

app.get('/dropSA.html', function(req, res) {
  res.sendfile(__dirname + '/dropSA.html');
});

app.get('/dropNA.html', function(req, res) {
  res.sendfile(__dirname + '/dropNA.html');
});

app.get('/dropEU.html', function(req, res) {
  res.sendfile(__dirname + '/dropEU.html');
});

app.get('/createuserAsia', function(req, res) {
  res.sendfile(__dirname + '/createuserAsia.html');
});

app.get('/createuserSA', function(req, res) {
  res.sendfile(__dirname + '/createuserSA.html');
});

app.get('/createuserNA', function(req, res) {
  res.sendfile(__dirname + '/createuserNA.html');
});

app.get('/createuserEU', function(req, res) {
  res.sendfile(__dirname + '/createuserEU.html');
});

app.get('/getuserAsia', function(req, res) {
  res.sendfile(__dirname + '/getuserAsia.html');
});

app.get('/getuserNA', function(req, res) {
  res.sendfile(__dirname + '/getuserNA.html');
});

app.get('/getuserSA', function(req, res) {
  res.sendfile(__dirname + '/getuserSA.html');
});

app.get('/getuserEU', function(req, res) {
  res.sendfile(__dirname + '/getuserEU.html');
});

app.get('/updateSA', function(req, res) {
  res.sendfile(__dirname + '/updateSA.html');
});

app.get('/updateNA', function(req, res) {
  res.sendfile(__dirname + '/updateNA.html');
});

app.get('/updateEU', function(req, res) {
  res.sendfile(__dirname + '/updateEU.html');
});

app.get('/updateAsia', function(req, res) {
  res.sendfile(__dirname + '/updateAsia.html');
});

app.get('/about', function(req, res) {
  res.sendfile(__dirname + '/about.html');
});

// Update MySQL database


// get user via POST 
app.post('/userAsia', function (req, res) {
    console.log(req.body);
    
    // get user by id
    if(typeof req.body.id != 'undefined') {
console.log(req.body.id);
        connection.query('select * from Asia where PlayerID = ?', req.body.id, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
                  var  responseHTML = '<table class="users"><tr><th>ID</th><th>Username</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th><th>Favorite Class</th><th>Favorite Weapon<\
/th><th>Favorite Vehicle</th></tr>';
                    responseHTML += '<tr><td>' + result[0].PlayerID + '</td>' +
                                    '<td>' + result[0].PlayerName + '</td>' +
                                    '<td>' + result[0].Country + '</td>' +
                                    '<td>' + result[0].KDRatio + '</td>' +
                                    '<td>' + result[0].Accuracy + '</td>' +
                                    '<td>' + result[0].Skill + '</td>' +
                                    '<td>' + result[0].ScorePerMinute + '</td>' +
                                    '<td>' + result[0].Favorite_Class + '</td>' +
                                    '<td>' + result[0].Favorite_Weapon + '</td>' +
                                    '<td>' + result[0].Favorite_Vehicle + '</td>' +
                                    '</tr></table>';
                    res.send(responseHTML);
                }
                else
                  res.send('Player does not exist.');
            }
        );     
    }
    //get user by username    
    else if( typeof req.body.PlayerName != 'undefined') {
        connection.query('select PlayerName, Country from Asia where PlayerName = ?', req.body.PlayerName, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
  	              res.send('Username: ' + result[0].PlayerName + '<br />' +
		  	       'Password: ' + result[0].Country
                );
            }
            else
                res.send('Player does not exist.');
		});
    }
});

// get user via POST 
app.post('/userNA', function (req, res) {
    console.log(req.body);
    
    // get user by id
    if(typeof req.body.id != 'undefined') {
console.log(req.body.id);
        connection.query('select * from North_America where PlayerID = ?', req.body.id, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
                  var  responseHTML = '<table class="users"><tr><th>ID</th><th>Username</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th><th>Favorite Class</th><th>Favorite Weapon<\
/th><th>Favorite Vehicle</th></tr>';

                    responseHTML += '<tr><td>' + result[0].PlayerID + '</td>' +
                                    '<td>' + result[0].PlayerName + '</td>' +
                                    '<td>' + result[0].Country + '</td>' +
                                    '<td>' + result[0].KDRatio + '</td>' +
                                    '<td>' + result[0].Accuracy + '</td>' +
                                    '<td>' + result[0].Skill + '</td>' +
                                    '<td>' + result[0].ScorePerMinute + '</td>' +
                                    '<td>' + result[0].Favorite_Class + '</td>' +
                                    '<td>' + result[0].Favorite_Weapon + '</td>' +
                                    '<td>' + result[0].Favorite_Vehicle + '</td>' +
                                    '</tr></table>';
                    res.send(responseHTML);
                }
                else
                  res.send('Player does not exist.');
            }
        );     
    }
    //get user by username    
    else if( typeof req.body.PlayerName != 'undefined') {
        connection.query('select PlayerName, Country from North_America where PlayerName = ?', req.body.PlayerName, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
  	              res.send('Username: ' + result[0].PlayerName + '<br />' +
		  	       'Password: ' + result[0].Country
                );
            }
            else
                res.send('Player does not exist.');
		});
    }
});

// get user via POST 
app.post('/userSA', function (req, res) {
    console.log(req.body);
    
    // get user by id
    if(typeof req.body.id != 'undefined') {
console.log(req.body.id);
        connection.query('select * from South_America where PlayerID = ?', req.body.id, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
                  var  responseHTML = '<table class="users"><tr><th>ID</th><th>Username</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th><th>Favorite Class</th><th>Favorite Weapon<\
/th><th>Favorite Vehicle</th></tr>';

                    responseHTML += '<tr><td>' + result[0].PlayerID + '</td>' +
                                    '<td>' + result[0].PlayerName + '</td>' +
                                    '<td>' + result[0].Country + '</td>' +
                                    '<td>' + result[0].KDRatio + '</td>' +
                                    '<td>' + result[0].Accuracy + '</td>' +
                                    '<td>' + result[0].Skill + '</td>' +
                                    '<td>' + result[0].ScorePerMinute + '</td>' +
                                    '<td>' + result[0].Favorite_Class + '</td>' +
                                    '<td>' + result[0].Favorite_Weapon + '</td>' +
                                    '<td>' + result[0].Favorite_Vehicle + '</td>' +
                                    '</tr></table>';
                    res.send(responseHTML);
                }
                else
                  res.send('Player does not exist.');
            }
        );     
    }
    //get user by username    
    else if( typeof req.body.PlayerName != 'undefined') {
        connection.query('select PlayerName, Country from South_America where PlayerName = ?', req.body.PlayerName, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
  	              res.send('Username: ' + result[0].PlayerName + '<br />' +
		  	       'Password: ' + result[0].Country
                );
            }
            else
                res.send('Player does not exist.');
		});
    }
});

// get user via POST 
app.post('/userEU', function (req, res) {
    console.log(req.body);
    
    // get user by id
    if(typeof req.body.id != 'undefined') {
console.log(req.body.id);
        connection.query('select * from Europe where PlayerID = ?', req.body.id, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
                  var  responseHTML = '<table class="users"><tr><th>ID</th><th>Username</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th><th>Favorite Class</th><th>Favorite Weapon<\
/th><th>Favorite Vehicle</th></tr>';

                    responseHTML += '<tr><td>' + result[0].PlayerID + '</td>' +
                                    '<td>' + result[0].PlayerName + '</td>' +
                                    '<td>' + result[0].Country + '</td>' +
                                    '<td>' + result[0].KDRatio + '</td>' +
                                    '<td>' + result[0].Accuracy + '</td>' +
                                    '<td>' + result[0].Skill + '</td>' +
                                    '<td>' + result[0].ScorePerMinute + '</td>' +
                                    '<td>' + result[0].Favorite_Class + '</td>' +
                                    '<td>' + result[0].Favorite_Weapon + '</td>' +
                                    '<td>' + result[0].Favorite_Vehicle + '</td>' +
                                    '</tr></table>';
                    res.send(responseHTML);
                }
                else
                  res.send('Player does not exist.');
            }
        );     
    }
    //get user by username    
    else if( typeof req.body.PlayerName != 'undefined') {
        connection.query('select PlayerName, Country from Europe where PlayerName = ?', req.body.PlayerName, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
  	              res.send('Username: ' + result[0].PlayerName + '<br />' +
		  	       'Password: ' + result[0].Country
                );
            }
            else
                res.send('Player does not exist.');
		});
    }
});



//original
// get user via GET (same code as app.post('/user') above)
app.get('/user', function (req, res) {
    
    // get user by id
    if(typeof req.query.PlayerID != 'undefined') {
        connection.query('select * from Asia where PlayerID = ?', req.query.PlayerID, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
                    var responseHTML = '<html><head><title>All Users</title><link href="CS355-Lab14.css" rel="stylesheet"></head><body>';
                    responseHTML += '<div class="header">All Players and Information herp derp</div>';
                    responseHTML += '<table id="customers"><tr><th>ID</th><th>Username</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th><th>Favorite Class</th><th>Favorite Weapon</th><th>Favorite Vehicle</th></tr>';
                    responseHTML += '<tr><td>' + result[0].PlayerID + '</td>' + 
                                    '<td>' + result[0].PlayerName + '</td>' +
                                    '<td>' + result[0].Country + '</td>' +
                                    '<td>' + result[0].KDRatio + '</td>' +
                                    '<td>' + result[0].Accuracy + '</td>' +
                                    '<td>' + result[0].Skill + '</td>' +
                                    '<td>' + result[0].ScorePerMinute + '</td>' +
                                    '<td>' + result[0].Favorite_Class + '</td>' +
                                    '<td>' + result[0].Favorite_Weapon + '</td>' +
                                    '<td>' + result[0].Favorite_Vehicle + '</td>' +
                                    '</tr></table>';
                    responseHTML += '</body></html>';
                    res.send(responseHTML);
                }
                else
                  res.send('Player does not exist.');
            }
        );     
    }
    //get user by username    
    else if( typeof req.query.PlayerName != 'undefined') {
        connection.query('select username, password from Asia where PlayerName = ?', req.query.PlayerName, 
            function (err, result) {
                console.log(result);
                if(result.length > 0) {
  	              res.send('Username: ' + result[0].PlayerName + '<br />' +
		  	       'Password: ' + result[0].Country
                );
            }
            else
                res.send('Player does not exist.');
		});
    }
    else {
        res.send('no data for player in request');
    }
});

// return all users
app.get('/users', function (req, res) {
    connection.query('select * from Asia',
		function (err, result) {
            return result;
		}
	);        
});


// get all users in a <table>
app.get('/users/table', function (req, res) {
    connection.query('SELECT * FROM fullroster;',
		function (err, result) {
            if(result.length > 0) {
                var responseHTML = '<html><head><title>All Users</title><link href="/CS355-Lab14.css" rel="stylesheet"></head><body>';
                responseHTML += '<div id="container">';
		responseHTML += '<div id="header"><h1>All Players</h1></div>';
                responseHTML += '<div id="menu" ><b>Menu</b><br><a href="../">Home Page</a><br />Create Account: <br /><a href="/createuserAsia/">Asia</a><br /><a href="/createuserNA/">North America</a><br /><a href="/createuserSA/">South America</a><br /><a href="/createuserEU/">Europe</a><br />Find a User: <br /><a href="/getuserAsia/">Asia</a> <br /><a href="/getuserNA/">North America</a> <br /><a href="/getuserSA/">South America</a> <br /><a href="/getuserEU/">Europe</a> <br />Drop Down: <br /><a href="/dropAsia.html">Asia</a> <br /><a href="/dropEU.html">Europe</a> <br /><a href="/dropNA.html">North America</a> <br /><a href="/dropSA.html">South America</a> <br />Changing Player Names: <br /><a href="/updateAsia">Asia</a> <br /><a href="/updateEU">Europe</a> <br /><a href="/updateNA">North America</a> <br /><a href="/updateSA">South America</a> <br />All Players:<br /><a href="/users/table">World-wide Roster</a><br /><a href="/about">About Us</a><br /></div>';
		responseHTML += '<div id=content>';
		responseHTML += '<h1>Full Team Roster</h1><h3>Click on a players name to for full stats</h3>'; 
                responseHTML += '<table id="customers"><tr><th class="rightalign">Players</th><th>Country</th><th>Kill/Death Ratio</th><th>Accuracy</th><th>Skill</th><th>Score Per Minute (SPM)</th></tr>';
                for (var i=0; result.length > i; i++) {
                    responseHTML += '<tr>' +
                                    '<td><a href="/user/?PlayerID=' + result[i].PlayerID + '">' + result[i].PlayerName + '</a></td>' 
			            + '<td>' + result[i].Country + '</td>' + '<td>' + result[i].KDRatio + '</td>' +  '<td>' + result[i].Accuracy + '</td>'
		                    + '<td>' + result[i].Skill + '</td>' +  '<td>' + result[i].ScorePerMinute + '</td>'
                                    '</tr>';
                }
                responseHTML += '</table>';
                responseHTML += '</div><div id="footer">Copyright &copy; Nate Danos</div></div>';
                responseHTML += '</body></html>';
                res.send(responseHTML);	
			}
			else
			  res.send('No Players exist.');
		}
	);        
});


// get all users in a <select>
app.post('/users/selectAsia', function (req, res) {
    console.log(req.body);
	connection.query('select * from Asia', 
		function (err, result) {
			console.log(result);
			var responseHTML = '<select id="user-list">';
			for (var i=0; result.length > i; i++) {
				var option = '<option value="' + result[i].PlayerID + '">' + result[i].PlayerName + '</option>';
				console.log(option);
				responseHTML += option;
			}
            responseHTML += '</select>';
			res.send(responseHTML);			
		});
});

// get all users in a <select>
app.post('/users/selectNA', function (req, res) {
    console.log(req.body);
	connection.query('select * from North_America', 
		function (err, result) {
			console.log(result);
			var responseHTML = '<select id="user-list">';
			for (var i=0; result.length > i; i++) {
				var option = '<option value="' + result[i].PlayerID + '">' + result[i].PlayerName + '</option>';
				console.log(option);
				responseHTML += option;
			}
            responseHTML += '</select>';
			res.send(responseHTML);			
		});
});

// get all users in a <select>
app.post('/users/selectSA', function (req, res) {
    console.log(req.body);
	connection.query('select * from South_America', 
		function (err, result) {
			console.log(result);
			var responseHTML = '<select id="user-list">';
			for (var i=0; result.length > i; i++) {
				var option = '<option value="' + result[i].PlayerID + '">' + result[i].PlayerName + '</option>';
				console.log(option);
				responseHTML += option;
			}
            responseHTML += '</select>';
			res.send(responseHTML);			
		});
});

// get all users in a <select>
app.post('/users/selectEU', function (req, res) {
    console.log(req.body);
	connection.query('select * from Europe', 
		function (err, result) {
			console.log(result);
			var responseHTML = '<select id="user-list">';
			for (var i=0; result.length > i; i++) {
				var option = '<option value="' + result[i].PlayerID + '">' + result[i].PlayerName + '</option>';
				console.log(option);
				responseHTML += option;
			}
            responseHTML += '</select>';
			res.send(responseHTML);			
		});
});



// Create a user Asia
app.post('/createuserAsia', function (req, res) {
    connection.query('INSERT INTO Asia SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            connection.query('select * from Asia where PlayerName = ?', req.body.PlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player was not inserted.');
				}
			);
		}
    );
});

// Create a user EU
app.post('/createuserEU', function (req, res) {
    connection.query('INSERT INTO Europe SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            connection.query('select * from Europe where PlayerName = ?', req.body.PlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player was not inserted.');
				}
			);
		}
    );
});

// Create a user NA
app.post('/createuserNA', function (req, res) {
    connection.query('INSERT INTO North_America SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            connection.query('select * from North_America where PlayerName = ?', req.body.PlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player was not inserted.');
				}
			);
		}
    );
});

// Create a user SA
app.post('/createuserSA', function (req, res) {
    connection.query('INSERT INTO South_America SET ?', req.body, 
        function (err, result) {
            if (err) throw err;
            connection.query('select * from South_America where PlayerName = ?', req.body.PlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player was not inserted.');
				}
			);
		}
    );
});



// Get a user from Asia
app.post('/getuserAsia', function (req, res) {
    console.log(req.body);
    connection.query('select * from Asia where PlayerName = ?', req.body.username,
                function (err, result) {
                    console.log(result);
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
                      );
                    }
                    else
                      res.send('Player does not exist.');
                });
});

// Get a user from NA
app.post('/getuserNA', function (req, res) {
    console.log(req.body);
    connection.query('select * from North_America where PlayerName = ?', req.body.username,
                function (err, result) {
                    console.log(result);
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
                      );
                    }
                    else
                      res.send('Player does not exist.');
                });
});

// Get a user from SA
app.post('/getuserSA', function (req, res) {
    console.log(req.body);
    connection.query('select * from South_America where PlayerName = ?', req.body.username,
                function (err, result) {
                    console.log(result);
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
                      );
                    }
                    else
                      res.send('Player does not exist.');
                });
});

// Get a user from EU
app.post('/getuserEU', function (req, res) {
    console.log(req.body);
    connection.query('select * from Europe where PlayerName = ?', req.body.username,
                function (err, result) {
                    console.log(result);
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
                      );
                    }
                    else
                      res.send('Player does not exist.');
                });
});


// Edit User SA
app.post('/updateSA', function (req, res) {
	console.log(req.body);
    var qry1 = "UPDATE South_America SET PlayerName ='" + req.body.NewPlayerName +  "' WHERE PlayerName = '" + req.body.OldPlayerName + "'";
	//console.log(qry1);
	connection.query (qry1,
        function (err, result) {
            if (err) throw err;
            connection.query('select * from South_America where PlayerName = ?', req.body.NewPlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player Does Not Exist.');
				}
			);
		}
    );
});

// Edit User NA
app.post('/updateNA', function (req, res) {
	console.log(req.body);
    var qry1 = "UPDATE North_America SET PlayerName ='" + req.body.NewPlayerName +  "' WHERE PlayerName = '" + req.body.OldPlayerName + "'";
	//console.log(qry1);
	connection.query (qry1,
        function (err, result) {
            if (err) throw err;
            connection.query('select * from North_America where PlayerName = ?', req.body.NewPlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player Does Not Exist.');
				}
			);
		}
    );
});

// Edit User EU
app.post('/updateEU', function (req, res) {
	console.log(req.body);
    var qry1 = "UPDATE Europe SET PlayerName ='" + req.body.NewPlayerName +  "' WHERE PlayerName = '" + req.body.OldPlayerName + "'";
	//console.log(qry1);
	connection.query (qry1,
        function (err, result) {
            if (err) throw err;
            connection.query('select * from Europe where PlayerName = ?', req.body.NewPlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player Does Not Exist.');
				}
			);
		}
    );
});

// Edit User Asia
app.post('/updateAsia', function (req, res) {
	console.log(req.body);
    var qry1 = "UPDATE Asia SET PlayerName ='" + req.body.NewPlayerName +  "' WHERE PlayerName = '" + req.body.OldPlayerName + "'";
	//console.log(qry1);
	connection.query (qry1,
        function (err, result) {
            if (err) throw err;
            connection.query('select * from Asia where PlayerName = ?', req.body.NewPlayerName, 
				function (err, result) {
                    if(result.length > 0) {
                      res.send('PlayerID: ' + result[0].PlayerID + '<br />' +
                               'PlayerName: ' + result[0].PlayerName + '<br />' +
                               'Country: ' + result[0].Country + '<br />' +
                               'Kill/Death Ratio: ' + result[0].KDRatio + '<br />' +
                               'Accuracy: ' + result[0].Accuracy + '<br />' +
                               'Skill: ' + result[0].Skill + '<br />' +
                               'Score Per Minute (SPM): ' + result[0].ScorePerMinute + '<br />' +
                               'Favorite Class: ' + result[0].Favorite_Class + '<br />' +
                               'Favorite Weapon: ' + result[0].Favorite_Weapon + '<br />' +
                               'Favorite Vehicle: ' + result[0].Favorite_Vehicle + '<br />'
 
						);
                    }
                    else
                      res.send('Player Does Not Exist.');
				}
			);
		}
    );
});


// Static Content Directory

app.use(express.static(path.join(__dirname, 'public')));


// Begin listening
app.listen(8004);

