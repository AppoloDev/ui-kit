import feather from 'feather-icons';

class Dropdown extends HTMLDivElement {
    connectedCallback() {
        if (this.getAttribute('is')) {
            this.removeAttribute('is');

            this.dropdownButtonSelector = this.querySelector('.dropdown__button');
            this.dropdownContentSelector = this.querySelector('.dropdown__content');

            this.dropdownButtonSelector.addEventListener('click', () => {
                this.toggleDropdown();
            });

            window.addEventListener('click', this.clickOutsideDropdown.bind(this));

            feather.replace();
        }
    }

    disconnectedCallback() {
        window.removeEventListener('click', this.clickOutsideDropdown);
    }

    toggleDropdown() {
        this.dropdownContentSelector.classList.toggle('active');
    }

    clickOutsideDropdown(e) {
        if (!e.target.matches('.dropdown__button, .dropdown__button *')) {
            this.dropdownContentSelector.classList.remove('active');
        }
    }
}

window.customElements.define('uikit-dropdown', Dropdown, {extends: 'div'});
