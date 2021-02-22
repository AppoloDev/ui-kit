import React from "react";
import PropTypes from 'prop-types';

function Badge(args) {
    const color = typeof args.color !== 'undefined' ? ` badge-${args.color}` : ' badge-primary';
    const size = typeof args.size !== 'undefined' && args.type !== 'default' ? ` badge-${args.size}` : '';
    const lighter = typeof args.lighter !== 'undefined' && args.lighter ? ' badge-lighter' : '';

    let type = '';
    let label;

    console.log(args);

    if (args.rounded) {
        type = ' badge-rounded';
        label = 12;
    } else {
        label = args.label;
    }

    return (
        <div class={`badge${color}${size}${type}${lighter}`}>{label}</div>
    )
}

Badge.propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'gris']),
    lighter: PropTypes.bool,
    rounded: PropTypes.bool
}

Badge.defaultProps = {
    lighter: false,
    rounded: false
}

export default Badge;
