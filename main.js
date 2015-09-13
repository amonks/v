require(
  [
    'jquery',
    'v/ui/external_window',
    'v/ui/primary_window',
    'v/ui/pane',
    'v/control/control'
  ], function ($, ExternalWindow, PrimaryWindow, Pane, Control) {
    'use strict'

    let primary_window = new PrimaryWindow(window)
    primary_window.on('ready', function () {
      console.log('about to make a pane in the primary window', primary_window.window.document.body)
      let pane = new Pane('dank-pane', primary_window)
      pane.on('ready', function () {
        pane.add($('<h1>This pane is in the primary window!</h1>'))
      })
      pane.on('added', function () {
        console.log('added pane')
      })
    })

    let external_window = new ExternalWindow('external')
    external_window.on('ready', function () {
      let pane = new Pane('swaggy-pane', external_window)
      pane.on('ready', function () {
        pane.add($('<h1>This pane is in an external window!</h1>'))
      })
      pane.on('added', function () {
        console.log('added pane')
      })
    })

    let an_other_external_window = new ExternalWindow('other-external')
    an_other_external_window.on('ready', function () {
      let pane = new Pane('incredible-pane', an_other_external_window)
      pane.on('ready', function () {
        pane.add($('<h1>This pane is in an other external window!</h1>'))
      })
      pane.on('added', function () {
        console.log('added pane')
      })
    })
  }
)
