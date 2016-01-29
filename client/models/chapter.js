Template.chapter.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe('chapter', id);
  });
});

Template.chapter.helpers({
  chapter: () => {
    var id = FlowRouter.getParam('id');
    return Chapters.findOne({_id: id});
  }
});

Template.exerciseItem.helpers({

    editorOptions: function() {
        return {
            lineNumbers: true,
            theme: "base16-dark",
            mode: "javascript",
            lint: CodeMirror.lint.javascript,
            fullScreen: false,
            extraKeys: {
                /*key binding for toggle full screen on/off
                F11: function(cm) {
                    console.log('fullScreen var is ' + cm.getOption("fullScreen"));
                }*/
            }
        };
    }
});
