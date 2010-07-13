/**
* faves.js
* This is where you list saved items
*
* Giv Parvaneh <giv@givp.org> 2010
* This code is free to use by all
*/

Titanium.include('globals.js');

win = Titanium.UI.currentWindow;

var db = Titanium.Database.open('myrefdb');

// create blank table view
var tableview = Titanium.UI.createTableView({});
win.add(tableview);

// function for loading data from db
var loadData = function(){
    
    var data = [];
    
    var rows = db.execute('SELECT * FROM SAVEDITEMS');

    while (rows.isValidRow())
    {
    	data.push({title:rows.field(0),hasChild:true});
    	rows.next();
    }  
    
    // load db data into the table view 
    tableview.setData(data);
    rows.close();
};

// refresh data on focus to ensure it's always up to date
win.addEventListener('focus', function()
{
   loadData();
});

// event listener for clicking on row to open description window
tableview.addEventListener('click', function(e)
{
    var win = Titanium.UI.createWindow({
		url:'details.js',
		backgroundColor:'#ffffff',
        barColor:Globals.barColor,
		title:e.rowData.title
	});
	
	win.currentItem = e.rowData.title;
	
	Titanium.UI.currentTab.open(win,{animated:true});
});