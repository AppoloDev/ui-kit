import './ColorPicker.scss';
import ColorPicker from './ColorPicker';
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
    title: "Atomic/Form/ColorPicker",
    component: ColorPicker,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description markdown={dedent`
                        ## Import
                        You can import color picker style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/form-color-picker/_color-picker'
                         `}
                    />
                    <Description markdown={dedent`
                        You can import color picker web component with following  
                    `}/>
                    <Source
                        language='js'
                        code={dedent`
                            import 'appolodev-ui-kit/src/atomics/form-color-picker/color-picker'
                         `}
                    />
                    <Description markdown={dedent`
                        You need also install this package
                    `}/>
                    <Source
                        language='bash'
                        code={dedent`
                            npm install @simonwep/pickr
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the color picker
                        
                        | CSS Variable                        | Default value                  |
                        | ----------------------------------- |:------------------------------:|
                        | --color-picker-height               | 48px                           |
                        | --color-picker-border-radius        | 4px                            |
                        | --color-picker-border-color         | var(--color-gris-100)          |
                       
                    `}/>
                    <Description markdown={dedent`
                        ## Configuration
                        You can override default configuration passing data attributes to element
                        
                        | Data Attribute                      | Description                                                                                                                                     |
                        | ----------------------------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------:|
                        | data-btn-save                       | Change label of Save button                                                                                                                     |
                        | data-btn-cancel                     | Change label of Cancel button                                                                                                                   |
                        | data-btn-clear                      | Change label of Clear button                                                                                                                    |
                        | data-options                        | You can pass a strigify JSON to overide any element of the configuration. You can check configuration [here](https://github.com/Simonwep/pickr) |
                        
                        ## Playground
                    `}/>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        },
    },
};

export const Basic = (args) => ColorPicker(args);
