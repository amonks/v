/* global define */

define(function (require) {
  'use strict'

  let $ = require('jquery')
  let EventEmitter = require('EventEmitter')

  let BaseUI = function (elem) {
    EventEmitter.call(this)

    this.element = $('<div></div>')
    if (typeof elem === 'string') {
      this.element = $(elem)
    } else if (elem instanceof $) {
      this.element = elem
    }

    this.ui_children = []
    this.ui_parent = {}
  }
  BaseUI.prototype = Object.create(EventEmitter.prototype)
  BaseUI.prototype.constructor = BaseUI

  BaseUI.prototype.render = function () {
    this.render_children()
  }

  BaseUI.prototype.render_children = function () {
    for (let child in this.get_children()) {
      child.render()
    }
  }

  BaseUI.prototype.add = function (thing) {
    if (!(thing instanceof BaseUI)) {
      thing = new BaseUI(thing)
    }
    this.element.append(thing.element)
    this.ui_children.push(thing)
    thing.ui_parent = this
    thing.emitEvent('new_parent')
    this.emitEvent('new_child')
  }

  BaseUI.prototype.add_to = function (parent) {
    parent.add(this)
  }

  BaseUI.prototype.get_children = function () {
    return this.ui_children
  }

  BaseUI.prototype.get_parent = function () {
    return this.ui_parent
  }

  return BaseUI
})
