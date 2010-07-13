/**
* main.js
* This is where we set up the tab groups and windows
*
* Giv Parvaneh <giv@givp.org> 2010
* This code is free to use by all
*/

Titanium.include('globals.js');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();



// create base UI tab and root window
var mainList = Titanium.UI.createWindow({  
    title:Globals.appTitle,
    backgroundColor:'#ffffff',
    barColor:Globals.barColor,
    url:'mainList.js',
    tabBarHidden: false
});
var tabMainList = Titanium.UI.createTab({  
    icon:'book.png',
    title:Globals.appTitle,
    window:mainList
});

// create saved items tab
var faves = Titanium.UI.createWindow({  
    title:'Saved Items',
    backgroundColor:'#ffffff',
    barColor:Globals.barColor,
    url:'faves.js',
    tabBarHidden: false
});
var tabFaves = Titanium.UI.createTab({  
    icon:'star.png',
    title:'Saved Items',
    window:faves
});

//  add tabs
tabGroup.addTab(tabMainList);
tabGroup.addTab(tabFaves);  
tabGroup.open(tabMainList);

Titanium.UI.currentWindow.add(tabGroup);
