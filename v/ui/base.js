/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let EventEmitter = require('EventEmitter')

  let BaseUI = function () {
    EventEmitter.call(this)

    this.ui_children = []
    this.ui_parent = {}
  }
  BaseUI.prototype = Object.create(EventEmitter.prototype)
  BaseUI.prototype.constructor = BaseUI

  BaseUI.prototype.element = $('<div>')

  BaseUI.prototype.add = function (thing) {
    if (thing instanceof BaseUI) {
      this.element.append(thing.element)
      this.ui_children.push(thing)
      thing.ui_parent = this
      thing.emitEvent('new_parent')
      this.emitEvent('new_child')
    } else {
      this.element.append(thing)
    }
  }

  BaseUI.prototype.get_children = function () {
    return this.ui_children
  }

  BaseUI.prototype.get_parent = function () {
    return this.ui_parent
  }

  return BaseUI
})
