/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let Output = require('vj/output/base')

  let OutputSpan = function (control) {
    Output.call(this, control)

    this.emitEvent('ready')
  }

  OutputSpan.prototype = Object.create(Output.prototype)
  OutputSpan.prototype.constructor = OutputSpan

  OutputSpan.prototype.render = function () {
    this.element.html($('<span>' + this.get() + '</span>'))
  }

  OutputSpan.prototype.add = undefined

  OutputSpan.prototype.validate = function (v) {
    if (typeof v === 'string') return true
  }

  return OutputSpan
})
