/* global define */

define(['EventEmitter', 'jquery'], function (EventEmitter, $) {
  'use strict'

  let BaseUI = function () {
    EventEmitter.call(this)
  }
  BaseUI.prototype = Object.create(EventEmitter.prototype)
  BaseUI.prototype.constructor = BaseUI

  BaseUI.prototype.children = []
  BaseUI.prototype.element = $('<div>')

  BaseUI.prototype.add = function (thing) {
    console.log('adding', thing, 'to', this.element)
    if (thing instanceof BaseUI) {
      console.log('adding baseui')
      this.children.push(thing)
      this.element.append(thing.element)
    } else {
      console.log('adding elem')
      this.element.append(thing)
    }
    console.log('added', thing, 'to', this.element)
    this.emitEvent('added')
  }

  return BaseUI
})
