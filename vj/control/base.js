/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let BaseUI = require('v/ui/base')

  let Control = function (id, opts) {
    BaseUI.call(this)

    this.set(opts.initial)
    this.element = $(`<div id="${id}">${this.get()}</div>`)
  }

  Control.prototype = Object.create(BaseUI.prototype)
  Control.prototype.constructor = Control

  Control.prototype.children = null

  Control.prototype.get = function () {
    return this.value
  }

  Control.prototype.set = function (v) {
    if (this.validate(v)) {
      this.value = v
      this.emit('update')
    }
  }

  Control.prototype.validate = function (v) {
    return true
  }

  return Control
})
