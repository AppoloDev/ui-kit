import React from "react";

const config = {
    argTypes: {
        color: {
            name: 'Couleur',
            control: {
                type: 'select',
                options: [
                    'primary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'gris'
                ],
            },
        },
        size: {
            name: 'Taille',
            control: {
                type: 'select',
                options: [
                    'default',
                    'small',
                    'medium',
                    'large',
                    'block'
                ],
            },
        },
        type: {
            name: 'Variation',
            control: {
                type: 'select',
                options: [
                    'default',
                    'outline',
                    'ghost',
                    'link'
                ],
            },
        },
        iconPosition: {
            name: 'Position de l\'icône',
            control: {
                type: 'select',
                options: [
                    'default',
                    'left',
                    'right',
                ],
            },
        },
        icon: {
            name: 'Icône',
            control: {
                type: 'select',
                options: [
                    'svg',
                    'cssgg',
                ],
            },
        },
        disabled: {
            name: 'Statut désactivé',
            control: {
                type: 'boolean'
            },
        },
        label: {
            name: 'Libellé',
            control: {
                type: 'text'
            },
        },
    }
};

const Template = (args) => {
    const color = `btn-${args.color}`;
    const size = args.size !== 'default' ? ` btn-${args.size}` : '';
    const type = args.type !== 'default' ? ` btn-${args.type}` : '';
    const icon = args.iconPosition !== 'default' ? ` btn-icon-${args.iconPosition}` : '';

    const renderSvg = function () {
        return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>);
    }

    const renderCssGGIcon = function () {
        return (<i className="gg-math-plus"></i>);
    }

    let iconLeft = null;
    let iconRight = null;

    if (args.iconPosition === 'left' && args.icon === 'svg') {
        iconLeft = renderSvg();
    } else if (args.iconPosition === 'right' && args.icon === 'svg') {
        iconRight = renderSvg();
    } else if (args.iconPosition === 'left' && args.icon === 'cssgg') {
        iconLeft = renderCssGGIcon();
    } else if (args.iconPosition === 'right' && args.icon === 'cssgg') {
        iconRight = renderCssGGIcon();
    }

    return (
        <>
            <button class={`btn ${color}${size}${type}${icon}`} disabled={args.disabled}>
                {iconLeft}
                {args.label}
                {iconRight}
            </button>
        </>

    )
};

export {Template, config};
