//= require ./menu_view
Flame.AutocompleteMenuView = Flame.MenuView.extend({
    keyPress: function(event) {
        return false;
    },
    insertTab: function() {
        this.close();
        return false;
    },
    moveDown: function() {
        // Using resignKeyResponder() on the text field won't work, because it was already 'resigned' but keeps
        // focus, apparently by design. We need the text input to lose focus though or the selection of the menu options
        // with the arrow keys gets messed up
        this.get('textField').didLoseKeyResponder();
        this._super();
    },
    moveRight: function() {
        return false;
    },
    moveLeft: function() {
        return false;
    },
    close: function() {
        this._super();
        // See above
        this.get('textField').didBecomeKeyResponder();
    }
});