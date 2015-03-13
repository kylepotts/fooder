/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');





var courtMenu = new UI.Menu({
  sections: [{
    items: [{
      title: 'Ford',
    }, {
      title: 'Wiley',
    },{
      title:'Earhart',
    },{
      title:"Windsor",
    },{
      title:"Hillenbrand"
    }]
  }]
});

courtMenu.on('select',onCourtSelect)


function onCourtSelect(e){
  console.log("Selected court " + e.item.title)
}


courtMenu.show()
