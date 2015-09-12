require(['jquery', 'panels'], function ($, ui) {
  ui.init()
  ui.on('ready', function () {
    ui.add($('<hr>'))
  })
  ui.on('added', function () {
    console.log('msg rec')
  })
})
