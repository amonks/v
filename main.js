require(['jquery', 'v/ui/windows', 'v/control/control'], function ($, ui, Control) {
  'use strict'

  let controls = []

  ui.on('ready', function () {
    console.log('got ready')
    controls.push(new Control(ui, 'brightness'))
    controls.push(new Control(ui, 'tint'))
  })
  ui.on('added', function () {
    console.log('msg rec')
  })
})
