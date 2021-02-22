import React from "react";
import PropTypes from 'prop-types';
import '../../../../../src/atomics/accordion/accordion';

function Accordion(args) {
    const type = typeof args.type !== 'undefined' && args.type !== 'default' ? ` ${args.type}` : '';

    return (
        <div class={`accordion${type}`} is="uikit-accordion" data-toggle-all="true">
            <div class="accordion--item">
                <div class="header" id="headingOne" data-toggle="collapse" data-target="#panelOne"
                     aria-expanded="false"
                     aria-controls="panelOne">
                    My 1rst question
                </div>
                <div class="panel" id="panelOne" aria-labelledby="headingOne">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores autem excepturi expedita nihil nostrum numquam reiciendis sit.
                        Corporis deserunt ipsa iure magni suscipit! Distinctio eligendi error iure odio porro quas.
                    </p>
                </div>
            </div>

            <div class="accordion--item">
                <div class="header" id="headingTwo" data-toggle="collapse" data-target="#panelTwo"
                     aria-expanded="false"
                     aria-controls="panelTwo">
                    My 2nd question
                </div>
                <div class="panel" id="panelTwo" aria-labelledby="headingTwo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores autem excepturi expedita nihil nostrum numquam reiciendis sit.
                        Corporis deserunt ipsa iure magni suscipit! Distinctio eligendi error iure odio porro quas.
                    </p>
                </div>
            </div>

            <div class="accordion--item">
                <div class="header" id="headingThree" data-toggle="collapse" data-target="#panelThree"
                     aria-expanded="false"
                     aria-controls="panelThree">
                    My 3th question
                </div>
                <div class="panel" id="panelThree" aria-labelledby="headingThree">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores autem excepturi expedita nihil nostrum numquam reiciendis sit.
                        Corporis deserunt ipsa iure magni suscipit! Distinctio eligendi error iure odio porro quas.
                    </p>
                </div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    type: PropTypes.oneOf(['default', 'bordered']),
}

export default Accordion;
