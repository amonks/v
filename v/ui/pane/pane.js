/* global define */

define(function (require) {
  'use strict'

  let BaseUI = require('v/ui/base')
  let $ = require('jquery')

  let Pane = function (id) {
    BaseUI.call(this)

    this.element = $(`<div id=${id} class='pane container-fluid'>`)

    let that = this
    setTimeout(function () {
      console.log('pane ready')
      that.emitEvent('ready')
    }, 0)

    this.on('new_parent', function tile () {
      let thing = this.ui_parent
      let dimension = 'width'
      if (thing.element.height() > thing.element.width()) dimension = 'height'
      let pane_count = 0
      for (let child of thing.ui_children) {
        if (child instanceof Pane) {
          console.log(child, `is a pane-child of `, thing)
          pane_count++
        }
      }
      let each_size = (100 / pane_count) + '%'
      for (let child of thing.ui_children) {
        console.log(each_size)
        child.element.css(dimension, each_size)
      }
      console.log(`just recalculated tiling for ${pane_count} children of`, thing)
    })
  }
  Pane.prototype = Object.create(BaseUI.prototype)
  Pane.prototype.constructor = Pane

  return Pane
})
