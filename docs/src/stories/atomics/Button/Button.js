import React from "react";
import PropTypes from 'prop-types';

function Button(args) {
    const color = typeof args.color !== 'undefined' ? ` btn-${args.color}` : ' btn-primary';
    const size = typeof args.size !== 'undefined' && args.type !== 'default' ? ` btn-${args.size}` : '';
    const type = typeof args.type !== 'undefined' && args.type !== 'default' ? ` btn-${args.type}` : '';
    const icon = typeof args.iconPosition !== 'undefined' ? ` btn-icon-${args.iconPosition}` : '';

    const renderSvg = function () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
        <button class={`btn${color}${size}${type}${icon}`} disabled={args.disabled}>
            {iconLeft}
            {args.label}
            {iconRight}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'gris']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'block']),
    type: PropTypes.oneOf(['default', 'outline', 'ghost', 'link']),
    icon: PropTypes.oneOf(['none', 'svg', 'cssgg']),
    iconPosition: PropTypes.oneOf(['left', 'right']),
    disabled: PropTypes.bool
}

Button.defaultProps = {
    disabled: false
}

export default Button;
