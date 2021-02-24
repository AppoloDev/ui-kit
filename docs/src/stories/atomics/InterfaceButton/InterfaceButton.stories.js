import './InterfaceButton.scss';
import InterfaceButton from './InterfaceButton';
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
    title: "Atomic/Interface Button",
    component: InterfaceButton,
    argTypes: {
        color: {
            name: 'Colors'
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description markdown={dedent`
                        ## Import
                        You can import interface button style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/interface-button/_interface-button'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the interface-button
                        
                        | CSS Variable                        | Default value                  |
                        | ----------------------------------- |:------------------------------:|
                        | --ib-button-width                   | 48px                           |
                        | --ib-button-height                  | 48px                           |
                        | --ib-button-radius                  | 4px                            |
                        | --ib-button-color                   | --color-gris-700               |
                        | --ib-button-background-color        | --white                        |
                       
                        ## Playground
                    `}/>
                    <Primary/>
                    <ArgsTable story={PRIMARY_STORY}/>
                    <Stories/>
                </>
            ),
        },
    },
};

export const Basic = (args) => InterfaceButton(args);

export const Colors = () => (
    <>
        <div style={{display: "flex"}}>
            <a
                className="ib-button ib-button-primary"
                href="#"
                style={{marginRight: 16}}
            >
                <svg
                    className="feather feather-chevron-left"
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
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
            </a>

            <a
                className="ib-button ib-button-secondary"
                href="#"
                style={{marginRight: 16}}
            >
                <svg
                    className="feather feather-chevron-left"
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
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
            </a>

            <a
                className="ib-button ib-button-dark"
                href="#"
            >
                <svg
                    className="feather feather-chevron-left"
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
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
            </a>
        </div>
    </>
);
