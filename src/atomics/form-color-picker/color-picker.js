import Pickr from '@simonwep/pickr';

class ColorPicker extends HTMLInputElement {
    connectedCallback() {
        if (this.getAttribute('is')) {
            this.removeAttribute('is');

            this.type = 'hidden';
            this.pickerElement = document.createElement('div');
            this.parentElement.append(this.pickerElement);
            this.initPicker();
        }
    }

    disconnectedCallback() {
        if (this.getAttribute('is')) {
            this.picker.destroy();
        }
    }

    initPicker() {
        const options = this.dataset.options ? JSON.parse(this.dataset.options) : {};

        this.picker = Pickr.create({
            el: this.pickerElement,
            theme: 'nano',
            default: this.value ? this.value : '#000000',
            components: {
                preview: true,
                opacity: true,
                hue: true,
                interaction: {
                    hex: true,
                    input: true,
                    clear: true,
                    save: true
                }
            },
            i18n: {
                'ui:dialog': 'color picker dialog',
                'btn:toggle': 'toggle color picker dialog',
                'btn:swatch': 'color swatch',
                'btn:last-color': 'use previous color',
                'btn:save': this.dataset.btnSave ? this.dataset.btnSave : 'Save',
                'btn:cancel': this.dataset.btnCancel ? this.dataset.btnCancel : 'Cancel',
                'btn:clear': this.dataset.btnClear ? this.dataset.btnClear : 'Clear',
            },
            ...options
        });

        this.picker
            .on('save', (color, instance) => {
                if (color) {
                    this.value = color.toHEXA().toString();
                } else {
                    this.value = '';
                }

                this.picker.hide();
            })
    }
}

window.customElements.define('uikit-color-picker', ColorPicker, {extends: 'input'});
