require(
  [
    'jquery',
    'v/ui/primary_window',
    'v/ui/external_window',
    'v/ui/pane',
    'v/ui/panel',
    'vj/control/string'
  ], function ($, PrimaryWindow, ExternalWindow, Pane, Panel, StringControl) {
    'use strict'

    let control_window = new ExternalWindow('control_window')

    control_window.on('ready', function () {
      let ui = new Pane('controls')
      control_window.add(ui)

      ui.on('ready', function () {
        let panel = new Panel()
        ui.add(panel)

        panel.on('ready', function () {
          let text = new StringControl('text', {initial: 'some text'})
          panel.add(text)
        })
      })
    })

    let primary_window = new PrimaryWindow()

    primary_window.on('ready', function () {
      let ui = new Pane('output')
      primary_window.add(ui)

      ui.on('ready', function () {
        ui.add($('<h1>Hello!</h1>'))
      })
    })
  }
)
