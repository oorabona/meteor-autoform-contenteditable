AutoForm.addInputType "contenteditable",
  template: "afContenteditable"
  valueOut: ->
    @html()
  valueIn: (val, atts) ->
    @value = val

  contextAdjust: (context) ->
    if typeof context.atts['data-maxlength'] is "undefined" and typeof context.max is "number"
      context.atts['data-maxlength'] = context.max

    context

Template.afContenteditable.rendered = ->
  @$('div[contenteditable=true]').html(@data.value)
  return
