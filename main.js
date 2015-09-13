require(
  [
    'jquery',
    'v/ui/primary_window',
    'v/ui/external_window',
    'v/ui/pane',
    'vj/control/string'
  ], function ($, PrimaryWindow, ExternalWindow, Pane, StringControl) {
    'use strict'

    let control_window = new ExternalWindow('control_window')
    control_window.on('ready', function () {
      let ui = new Pane('controls', control_window)
      ui.on('ready', function () {
        let text = new StringControl('text', {initial: 'some text'})
        ui.add(text)
      })
    })

    let primary_window = new PrimaryWindow()
    primary_window.on('ready', function () {
      let ui = new Pane('controls', primary_window)
      ui.on('ready', function () {
        ui.add($('<h1>Hello!</h1>'))
      })
    })
  }
)
