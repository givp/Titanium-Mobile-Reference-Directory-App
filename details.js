/**
* details.js
* This is where we display the description of the selected item
*
* Giv Parvaneh <giv@givp.org> 2010
* This code is free to use by all
*/

// include data and global vars
Titanium.include('globals.js');
Titanium.include('data.js');

win = Titanium.UI.currentWindow;

// flag for save button
var isSave = true;
var desc = '';

// See if item is saved in db
var db = Titanium.Database.open('myrefdb');
var rows = db.execute('SELECT * FROM SAVEDITEMS WHERE NAME = "' + win.currentItem + '"');

// create scroll view for the content
var scrollView = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});


// loop through data and get correct item by title (this is easier than using Id's incase you add new items later)
for (var i = 0; i < myData.length; i++){
    if(myData[i].title == win.currentItem){
        desc = myData[i].description;
    }
}

// create description label
var label = Titanium.UI.createLabel({
	text:desc,
	height:'auto',
	width:300,
	top:10,
	font:{fontSize:16},
	color:'#333333',
	textAlign:'left'
});

// save button for the bar
var saveButton = Titanium.UI.createButton({
    title:'Save'
});

// change save button if item is saved already
if(rows.getRowCount()){
    saveButton.title = 'Un-save';
    isSave = false;
}

win.rightNavButton = saveButton;

scrollView.add(label);
win.add(scrollView);

// close db
rows.close();

// event listener for the save button
saveButton.addEventListener('click', function()
{
    // if saving, insert into db and change save button title else, delete from db
    if(isSave){
        saveButton.title = 'Un-save';
        db.execute('INSERT INTO SAVEDITEMS ( NAME ) VALUES(?)',win.currentItem);
        isSave = false;
    } else {
        saveButton.title = 'Save';
        db.execute('DELETE FROM SAVEDITEMS WHERE NAME = "' + win.currentItem + '"');
        isSave = true;
    }
});
