import React from "react";
import PropTypes from 'prop-types';

function Badge(args) {
    const color = typeof args.color !== 'undefined' ? ` badge-${args.color}` : ' badge-primary';
    const size = typeof args.size !== 'undefined' && args.type !== 'default' ? ` badge-${args.size}` : '';
    const type = typeof args.type !== 'undefined' && args.type !== 'default' ? ` badge-${args.type}` : '';

    return (
        <div class={`badge${color}${size}${type}`}>{args.label}</div>
    )
}

Badge.propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info', 'gris']),
    type: PropTypes.oneOf(['default', 'rounded'])
}

Badge.defaultProps = {}

export default Badge;
