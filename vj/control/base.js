/* global define */

define(['v/ui/base', 'jquery'], function (BaseUI, $) {
  'use strict'

  let value

  let Control = function (id, opts) {
    BaseUI.call(this)
    this.set(opts.initial)
    this.element = $(`<div id="${id}">${value}</div>`)
  }

  Control.prototype = Object.create(BaseUI.prototype)
  Control.prototype.constructor = Control

  Control.prototype.children = null

  Control.prototype.get = function () {
    return value
  }

  Control.prototype.set = function (v) {
    if (this.validate(v)) {
      value = v
      this.emit('update')
    }
  }

  Control.prototype.validate = function (v) {
    return true
  }

  return Control
})