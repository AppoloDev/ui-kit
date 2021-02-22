import './Checkbox.scss';
import Checkbox from './Checkbox';
import {
    Title,
    Source,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import dedent from 'ts-dedent';
import React from "react";

export default {
    title: "Atomic/Form/Checkbox - Radio - Switch",
    component: Checkbox,
    argTypes: {
        label: {
            name: 'Label'
        },
        type: {
            name: 'Variants'
        },
        state: {
            name: 'Status'
        },
        icon: {
            name: 'Icon'
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description>Documentation for checkbox component</Description>
                    <Description>You can import checkbox with following</Description>
                    <Source
                        language='css'
                        code={dedent`
                            @import('~uikit/atomics/checkbox/checkbox')
                         `}
                    />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        },
    },
};

export const Basic = (args) => Checkbox(args);
Basic.args = {label: 'Label'};

export const Variants = () => (
    <>
        <div class="form-group-check" style={{marginBottom: 16}}>
            <input class="form-control" id="cv1" type="checkbox"/>
            <label htmlFor="cv1">Checkbox</label>
        </div>

        <div class="form-group-check" style={{marginBottom: 16}}>
            <input class="form-control" id="rv1" type="radio"/>
            <label htmlFor="rv1">Checkbox</label>
        </div>

        <div class="form-group-check">
            <input class="form-control switch" id="sv1" type="checkbox" />
            <label htmlFor="sv1">Switch</label>
        </div>
    </>
);

export const States = () => (
    <>
        <div class="form-group-check" style={{marginBottom: 16}}>
            <input class="form-control is-invalid" id="cvs1" type="checkbox"/>
            <label htmlFor="cvs1">Checkbox</label>
        </div>

        <div class="form-group-check">
            <input class="form-control" disabled id="cvs2" type="checkbox"/>
            <label htmlFor="cvs2">Checkbox</label>
        </div>
    </>
);
