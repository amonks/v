/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let Control = require('vj/control/base')
  let string_hbs = require('hbs!vj/control/string')

  let StringControl = function (id, opts) {
    Control.call(this, id, opts)

    this.element = $(string_hbs({id: id, value: this.value}))

    let input = this.element.find('input')
    let that = this
    input.on('input', function () {
      console.log('new input')
      that.set(input.val())
    })

    console.log('string control ready')
    this.emitEvent('ready')
  }

  StringControl.prototype = Object.create(Control.prototype)
  StringControl.prototype.constructor = StringControl

  StringControl.prototype.add = undefined

  StringControl.prototype.validate = function (v) {
    if (typeof v === 'string') return true
  }

  return StringControl
})
