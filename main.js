require(['jquery', 'v/ui/windows', 'v/control'], function ($, ui, Control) {
  'use strict'

  ui.on('ready', function () {
    let brightness = new Control(ui, 'brightness')
    let tint = new Control(ui, 'tint')
  })
  ui.on('added', function () {
    console.log('msg rec')
  })
})
