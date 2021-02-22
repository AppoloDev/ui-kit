import {TweenLite} from 'gsap';

class Accordion extends HTMLDivElement {
    connectedCallback() {
        if (this.getAttribute('is')) {
            this.removeAttribute('is');

            this.querySelectorAll('[data-toggle="collapse"]').forEach((header) => {
                header.addEventListener('click', this.toggleAccordion.bind(this));
            })
        }
    }

    toggleAccordion(e) {
        const header = e.currentTarget;
        const panel = this.querySelector(header.dataset.target);

        if (this.dataset.toggleAll) {
            this.closeAllExcept(header);
        }

        const expanded = header.getAttribute('aria-expanded') === "true";
        header.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !expanded);

        if (panel.classList.contains('expanded')) {
            TweenLite.to(panel, .5, {
                height: 0,
                onStart: () => {
                    if (panel.style.overflow) {
                        panel.style.overflow = '';
                    }
                }
            });

            panel.classList.remove('expanded');
        } else {
            TweenLite.set(panel, {height: 'auto'})
            TweenLite.from(panel, .5, {
                height: 0,
                onComplete: () => {
                    panel.style.overflow = 'visible';
                }
            });

            panel.classList.add('expanded');
        }
    }

    closeAllExcept(header) {
        this.querySelectorAll('[data-toggle="collapse"]').forEach((item) => {
            if (header !== item) {
                const panel = this.querySelector(item.dataset.target);
                item.classList.remove('expanded');
                item.setAttribute('aria-expanded', false);

                if (panel.classList.contains('expanded')) {
                    TweenLite.to(panel, .5, {
                        height: 0,
                        onStart: () => {
                            if (panel.style.overflow) {
                                panel.style.overflow = '';
                            }
                        }
                    });

                    panel.classList.remove('expanded');
                }
            }
        })
    }

    disconnectedCallback() {
        if (this.getAttribute('is')) {
        }
    }
}

window.customElements.define('uikit-accordion', Accordion, {extends: 'div'});
