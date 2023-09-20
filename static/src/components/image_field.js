/** @odoo-module **/

import { registry } from "@web/core/registry";
import { ImageField } from '@web/views/fields/image/image_field';


class ImageFieldExt extends ImageField {
    async _on_edit_diagram(evt) {
        const target = evt.currentTarget;
        target.setAttribute('data', await this._getbase64());
        DiagramEditor.editElement(target, {proto: 'json'}, 'min', this._saveDiagram.bind(this), ['dark=0', 'pv=0']);
    }
    _saveDiagram(data) {
        this.state.isValid = true;
        // Invalidate the `rawCacheKey`.
        this.rawCacheKey = null;
        this.props.update(data.split(",")[1]);
    }
    async _getbase64() {
        const url = this.getUrl(this.props.previewImage || this.props.name);
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(base64data);
            }
        });
    }
}

registry.category("fields").add("image", ImageFieldExt, { force: true });