/**
* app.js
* Giv Parvaneh <giv@givp.org> 2010
* This code is free to use by all
*/

// create initial window for tab group
var appWin = Titanium.UI.createWindow({
    url:'main.js'
});

// lock orientation to portrait
appWin.orientationModes = [
	Titanium.UI.PORTRAIT
];
Titanium.UI.orientation = Titanium.UI.PORTRAIT;

appWin.open();

// initiate faves db and create it if it doesn't exist
var db = Titanium.Database.open('myrefdb');
db.execute('CREATE TABLE IF NOT EXISTS SAVEDITEMS  (NAME TEXT)');

// enable this if you want to delete faves each time app starts
db.execute('DELETE FROM SAVEDITEMS');