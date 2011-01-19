define(function(a, b) {
  var c = a("ace/keyboard/state_handler").StateHandler;
  a = {start:[{key:"i", then:"insertMode"}, {regex:["([0-9]*)", "(k|up)"], exec:"golineup", params:[{name:"times", match:1, type:"number", defaultValue:1}]}, {regex:["([0-9]*)", "(j|down|enter)"], exec:"golinedown", params:[{name:"times", match:1, type:"number", defaultValue:1}]}, {regex:["([0-9]*)", "(l|right)"], exec:"gotoright", params:[{name:"times", match:1, type:"number", defaultValue:1}]}, {regex:["([0-9]*)", "(h|left)"], exec:"gotoleft", params:[{name:"times", match:1, type:"number", defaultValue:1}]}, 
  {comment:"Catch some keyboard input to stop it here", match:a("ace/keyboard/state_handler").matchCharacterOnly}], insertMode:[{key:"esc", then:"start"}]};
  b.Vim = new c(a)
});