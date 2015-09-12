require(['jquery', 'windows', 'control'], function ($, ui, Control) {
  'use strict'

  ui.on('ready', function () {
    let brightness = new Control(ui, 'brightness')
  })
  ui.on('added', function () {
    console.log('msg rec')
  })
})
