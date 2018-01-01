// Reference: https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html

function run() {
  ObjC.import('Cocoa');
  ObjC.import('InputMethodKit');

  ObjC.registerSubclass({
    name: 'FooInputController',
    superclass: 'IMKInputController',
    //properties: {
    //  candidates: 'IMKCandidates',
    //},
    methods: {
      'initWithServer:delegate:client:': {
        types: ['id', ['IMKServer', 'id', 'id']],
        implementation: function (server, delegate, client) {
          var _this = ObjC.super(this).initWithServerDelegateClient(server, delegate, client);

          //if (_this != null) {
          //  _this.candidates = $.IMKCandidates.alloc.initWithServer(
          //      server,
          //      $.kIMKSingleColumnScrollingCandidatePanel);
          //}

          return _this;
        },
      },
      'handleEvent:client:': {
        types: ['bool', ['NSEvent', 'id']],
        implementation: function (event, client) {
          // event.characters and event.charactersIgnoringModifiers are not very reliable.
          //
          // Need predefined keymaps to translate event.keyCode to the charCode.
          //
          // Virtual Key Code:
          // MacOSX10.10.sdk/System/Library/Frameworks/
          //   Carbon.framework/Versions/Current/Frameworks/
          //     HIToolbox.framework/Versions/Current/Headers/Events.h
          $.NSLog('%@', event);

          var handled = false;

          switch (event.type) {
            case $.NSKeyDown:
              var chars = event.characters.js;

              if (/[a-z]/i.test(chars)) {
                client.insertText(rot13(chars));
                handled = true;
              }
              break;

            case $.NSKeyUp:
              break;

            case $.NSFlagsChanged:
              break;

            default: break;
          }

          return handled;
        },
      },
    },
  });

  var applet = Application.currentApplication();

  applet.strictPropertyScope = applet.strictCommandScope = applet.strictParameterType = false;

  var bundle = $.NSBundle.mainBundle;
  var server = $.IMKServer.alloc.initWithNameBundleIdentifier(
      bundle.infoDictionary.js.InputMethodConnectionName,
      bundle.bundleIdentifier);
}

function rot13(text) {
  return text.replace(/[a-z]/ig, function (c) {
    var base = 'A'.charCodeAt(0);
    var code = c.toUpperCase().charCodeAt(0) - base;

    return String.fromCharCode(base + (code + 13) % 26);
  });
}
