'use strict';

goog.provide('Blockly.JavaScript.microbug');

goog.require('Blockly.JavaScript');

var prefix = ''; //any prefix can be added to the function names, just in case they end up being namespaced or in an object

Blockly.JavaScript['microbug_scrollString'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'Speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'scrollString(' + value_message + ',' + value_speed + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_seteye'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_state = Blockly.JavaScript.valueToCode(block, 'state', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setEye(' + value_id + ',' + value_state + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_eyeon'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'eyeOn(' + value_id + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_eyeoff'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'eyeOff(' + value_id + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_printmessage'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pausetime = Blockly.JavaScript.valueToCode(block, 'pausetime', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'printMessage(' + value_message + ',' + value_pausetime + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_showletter'] = function(block) {
  var value_letter = Blockly.JavaScript.valueToCode(block, 'letter', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'showLetter(' + value_letter + ');';
  return prefix+code;
}

Blockly.JavaScript['microbug_getbutton'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getButton(' + value_id + ');';
  // TODO: Change ORDER_NONE to the correct strength.
  return [prefix+code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['microbug_cleardisplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'clearDisplay();';
  return prefix+code;
};

Blockly.JavaScript['microbug_plot'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'DALJS.plot(' + value_x + ',' + value_y + ');';
  return prefix+code;
};

Blockly.JavaScript['microbug_unplot'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'unplot(' + value_x + ',' + value_y + ');';
  return prefix+codecode;
};

Blockly.JavaScript['microbug_point'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'point(' + value_x + ',' + value_y + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [prefix+code, Blockly.JavaScript.ORDER_NONE];
};

// FOREVER LOOP (while true?)
