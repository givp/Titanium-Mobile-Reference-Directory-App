/**
* mainList.js
* This is the main list page (first tab)
*
* Giv Parvaneh <giv@givp.org> 2010
* This code is free to use by all
*/

Titanium.include('globals.js');
Titanium.include('data.js');

var data = [];
var firstLetter;
var oldFirstLetter;

// loop through data and add to list
for (var i = 0; i < myData.length; i++)
{
	// get first letter of each item for grouping
	firstLetter = myData[i].title.substr(0,1);
	
	if(i == 0){
	    oldFirstLetter = firstLetter;
	    Ti.API.info(oldFirstLetter);
	} else {
	
	    if(firstLetter == oldFirstLetter){
    	    oldFirstLetter = null;
    	} else {
    	    oldFirstLetter = firstLetter;
    	}
	
    }
	

	data.push({title:myData[i].title,hasChild:true,header:oldFirstLetter});
	
	oldFirstLetter = firstLetter;
}

// add search bar
var search = Titanium.UI.createSearchBar({
	showCancel:false
});

// create table view
var tableview = Titanium.UI.createTableView({
    data:data,
    search:search,
	filterAttribute:'title'
});

Titanium.UI.currentWindow.add(tableview);

// create table view event listener
tableview.addEventListener('click', function(e)
{
    var win = Titanium.UI.createWindow({
		url:'details.js',
		backgroundColor:'#ffffff',
        barColor:'#333333',
		title:e.rowData.title
	});
	
	// send selected item's title to detail page
	win.currentItem = e.rowData.title;
	
	Titanium.UI.currentTab.open(win,{animated:true});
});