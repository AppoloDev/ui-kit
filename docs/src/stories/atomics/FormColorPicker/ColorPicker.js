import React from "react";

import '../../../../../src/atomics/form-color-picker/color-picker';

function ColorPicker(args) {
    return (
        <input type="text" class="form-control color-picker" is="uikit-color-picker"/>
    )
}

export default ColorPicker;
