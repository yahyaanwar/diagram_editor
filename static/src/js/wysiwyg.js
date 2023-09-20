/** @odoo-module **/

import Wysiwyg from "web_editor.wysiwyg";
import core from 'web.core';
var _t = core._t;

const DiagramWysiwyg = Wysiwyg.include({
    _getPowerboxOptions: function () {
        const options = this._super();
        options.commands.push({
            name: _t('Diagram'),
            category: _t('Media'),
            description: _t("Insert a diagram."),
            fontawesome: 'fa-sitemap',
            priority: 50,
            callback: this._addDiagram.bind(this),
        });
        return options;
    },
    _addDiagram() {
        const img = document.createElement('img');
        img.setAttribute('src', 'data:image/png;base64,');
        DiagramEditor.editElement(img, {proto: 'json'}, 'min', () => {
            return this.odooEditor.execCommand('insert', img);
        }, ['dark=0', 'pv=0']);
    }
});

return DiagramWysiwyg;