/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let ExternalWindow = require('v/ui/window/external')
  let PrimaryWindow = require('v/ui/window/primary')
  let Pane = require('v/ui/pane/pane')
  let Panel = require('v/ui/panel/panel')
  let StringControl = require('vj/control/string')
  let OutputSpan = require('vj/output/span')
  let BaseUI = require('v/ui/base')

  let text_control = new StringControl('text', {initial: 'some text'})
  return function () {
    let control_window = new ExternalWindow('control_window')

    control_window.on('ready', function () {
      let center = new Pane('center')
      control_window.add(center)

      center.on('ready', function () {
        let panel = new Panel()
        center.add(panel)

        panel.on('ready', function () {
          panel.add(text_control)
        })
      })
    })

    let primary_window = new PrimaryWindow()

    primary_window.on('ready', function () {
      let left = new Pane('left')
      primary_window.add(left)

      left.on('ready', function () {
        let panel = new Panel()
        left.add(panel)

        panel.on('ready', function () {
          let h1 = new BaseUI('<h1></h1>')
          panel.add(h1)
          let string_output = new OutputSpan(text_control)
          string_output.add_to(h1)
        })
      })

      let right = new Pane('right')
      primary_window.add(right)

      right.on('ready', function () {
        let panel = new Panel()
        right.add(panel)

        panel.on('ready', function () {
          panel.add($('<h1>hello (right)</h1>'))
        })
      })
    })
  }
})
