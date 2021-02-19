import './Button.scss';
import Button from './Button';
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

export default {
    title: "Atomic/Button",
    component: Button,
    argTypes: {
        label: {
            name: 'Label'
        },
        color: {
            name: 'Colors'
        },
        size: {
            name: 'Sizes'
        },
        type: {
            name: 'Variants'
        },
        icon: {
            name: 'Icon'
        },
        iconPosition: {
            name: 'Icon Position'
        },
        disabled: {
            name: 'Disabled'
        }
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description>Documentation for button component</Description>
                    <Description>You can import button with following</Description>
                    <Source
                        language='scss'
                        code={dedent`
                            @import('~uikit/atomics/button/button')
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

export const Basic = (args) => Button(args);
Basic.args = {label: 'Label'};

export const Colors = () => (
    <>
        <div style={{display: "flex"}}>
            <button class="btn btn-primary" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-success" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-danger" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-warning" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-info" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-gris">
                Label
            </button>
        </div>
    </>
);

export const Sizes = () => (
    <>
        <div style={{display: "flex", marginBottom: 16}}>
            <button class="btn btn-primary btn-small" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-primary btn-medium" style={{marginRight: 16}}>
                Label
            </button>
            <button class="btn btn-primary btn-large" style={{marginRight: 16}}>
                Label
            </button>
        </div>

        <button class="btn btn-primary btn-block">
            Label
        </button>
    </>
);

export const Variants = () => (
    <>
        <div style={{display: "flex"}}>
            <button class="btn btn-primary btn-outline" style={{marginRight: 16}}>
                Label
            </button>

            <button class="btn btn-primary btn-ghost" style={{marginRight: 16}}>
                Label
            </button>

            <button class="btn btn-primary btn-link" style={{marginRight: 16}}>
                Label
            </button>

            <button class="btn btn-primary" disabled style={{marginRight: 16}}>
                Label
            </button>
        </div>
    </>
);

export const Icons = () => (
    <>
        <div style={{display: "flex"}}>
            <button class="btn btn-primary btn-icon-left" style={{marginRight: 16}}>
                <svg
                    class="feather feather-plus"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="12"
                        x2="12"
                        y1="5"
                        y2="19"
                    />
                    <line
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                    />
                </svg>

                Label
            </button>
            <button class="btn btn-primary btn-icon-right" style={{marginRight: 16}}>
                Label

                <svg
                    class="feather feather-plus"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="12"
                        x2="12"
                        y1="5"
                        y2="19"
                    />
                    <line
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                    />
                </svg>
            </button>
        </div>
    </>
);
