import React from "react";
import PropTypes from 'prop-types';

function Checkbox(args) {
    const type = typeof args.type !== 'undefined' && args.type !== 'checkbox' ? args.type : 'checkbox';
    const state = typeof args.state !== 'undefined' && args.state !== 'default' ? args.state : '';
    const inputType = type === 'radio' ? 'radio' : 'checkbox';
    const switchClass = type === 'switch' ? ' switch' : '';
    const invalidClass = state === 'invalid' ? ' is-invalid' : '';

    const renderSvg = function () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 class="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>);
    }

    const renderCssGGIcon = function () {
        return (<i class="gg-math-plus"/>);
    }

    let icon = null;

    if (args.icon === 'svg') {
        icon = renderSvg();
    } else if (args.icon === 'cssgg') {
        icon = renderCssGGIcon();
    }

    return (
        <div class="form-group-check mg-v-1">
            <input class={`form-control${switchClass}${invalidClass}`} id="cs1" type={inputType} disabled={state === 'disabled'}/>
            <label for="cs1">{icon ? icon : args.label}</label>
        </div>
    )
}

Checkbox.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'radio', 'switch']),
    state: PropTypes.oneOf(['default', 'invalid', 'disabled']),
    icon: PropTypes.oneOf(['none', 'svg', 'cssgg']),
}

export default Checkbox;
