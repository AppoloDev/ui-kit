import React from "react";
import PropTypes from 'prop-types';

import '../../../../../src/components/dropdown/dropdown';

function Dropdown(args) {
    const placement = typeof args.placement !== 'undefined' && args.placement === 'left' ? 'left' : 'right'

    return (
        <div class="dropdown" is="uikit-dropdown">
            <button class="ib-button dropdown__button">
                <i data-feather="more-horizontal"></i>
            </button>

            <div class="dropdown__content" data-placement={placement}>
                <div class="header">Main actions</div>
                <ul class="main">
                    <li>
                        <a href="#"><i data-feather="edit-3"></i> Edit</a>
                    </li>
                    <li>
                        <a href="#"><i data-feather="copy"></i> Duplicate</a>
                    </li>
                    <li>
                        <a href="#"><i data-feather="trash-2"></i> Delete</a>
                    </li>
                </ul>

                <ul class="others">
                    <li>
                        <a href="#"><i data-feather="bell"></i> Others</a>
                    </li>
                    <li>
                        <a href="#"><i data-feather="bell-off"></i> Others 2</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    placement: PropTypes.oneOf(['left', 'right']),
}

export default Dropdown;
