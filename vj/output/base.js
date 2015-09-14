/* global define */

define(function (require) {
  'use strict'

  let BaseUI = require('v/ui/base')

  let Output = function (control) {
    BaseUI.call(this)

    let that = this
    control.on('update', function () {
      that.set(control.get())
      that.render()
    })
  }

  Output.prototype = Object.create(BaseUI.prototype)
  Output.prototype.constructor = Output

  Output.prototype.children = null

  Output.prototype.get = function () {
    return this.value
  }

  Output.prototype.set = function (v) {
    if (this.validate(v)) {
      this.value = v
      this.emit('update')
    }
  }

  Output.prototype.validate = function (v) {
    return true
  }

  return Output
})
