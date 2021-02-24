import React from "react";
import PropTypes from 'prop-types';

function InterfaceButton(args) {
    const color = typeof args.color !== 'undefined' ? ` ib-button-${args.color}` : ' ib-button-primary';

    return (
        <a href="#" class={`ib-button${color}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-chevron-left">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </a>
    )
}

InterfaceButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'dark']),
}

InterfaceButton.defaultProps = {}

export default InterfaceButton;
