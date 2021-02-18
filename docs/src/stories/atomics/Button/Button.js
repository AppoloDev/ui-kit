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
            control: {
                type: 'select',
                options: [
                    'default',
                    'medium',
                    'block'
                ],
            },
        },
        type: {
            control: {
                type: 'select',
                options: [
                    'default',
                    'outline',
                    'ghost'
                ],
            },
        },
        disabled: {
            control: {
                type: 'boolean'
            },
        },
    }
};

const Template = (args) => {
    const color = `btn-${args.color}`;
    const size = args.size !== 'default' ? ` btn-${args.size}` : '';
    const type = args.type !== 'default' ? ` btn-${args.type}-${args.color}` : '';
    return (
        <>
            <button class={`btn ${color}${size}${type}`} disabled={args.disabled}>
                {args.label}
            </button>
        </>

    )
};

export {Template, config};
