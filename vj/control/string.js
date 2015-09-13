/* global define */

define(['vj/control/base', 'jquery', 'hbs!vj/control/string'],
  function (Control, $, string_hbs) {
    'use strict'

    let value

    let StringControl = function (id, opts) {
      Control.call(this, id, opts)
      this.element = $(string_hbs({id: id, value: value}))
      this.emitEvent('ready')
    }

    StringControl.prototype = Object.create(Control.prototype)
    StringControl.prototype.constructor = StringControl

    StringControl.prototype.validate = function (v) {
      if (typeof v === 'string') return true
    }

    return StringControl
  }
)
