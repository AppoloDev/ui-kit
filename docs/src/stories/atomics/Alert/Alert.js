import React from "react";
import PropTypes from 'prop-types';

function Alert(args) {
    const color = typeof args.color !== 'undefined' ? ` alert-${args.color}` : ' alert-primary';

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

    let icon = null;

    if (args.icon === 'svg') {
        icon = renderSvg();
    } else if (args.icon === 'cssgg') {
        icon = renderCssGGIcon();
    }

    return (
        <div class={`alert${color}`}>
            {icon}
            {args.label}
        </div>
    )
}

Alert.propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'gris', 'neutral']),
    icon: PropTypes.oneOf(['none', 'svg', 'cssgg']),
}

export default Alert;
