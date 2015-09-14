/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let Control = require('vj/control/base')
  let string_hbs = require('hbs!vj/control/string')

  let value

  let StringControl = function (id, opts) {
    Control.call(this, id, opts)
    this.element = $(string_hbs({id: id, value: value}))
    console.log('control ready')
    this.emitEvent('ready')
  }

  StringControl.prototype = Object.create(Control.prototype)
  StringControl.prototype.constructor = StringControl

  StringControl.prototype.validate = function (v) {
    if (typeof v === 'string') return true
  }

  return StringControl
})
