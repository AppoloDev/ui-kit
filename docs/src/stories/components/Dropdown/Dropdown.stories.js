import './Dropdown.scss';
import Dropdown from './Dropdown';
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
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        placement: {
            name: 'Placement',
            description: 'Dropdown content placement'
        },
        showHeader: {
            name: 'Header'
        }
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description>Documentation for dropdown component</Description>
                    <Description markdown={dedent`
                        ## Import
                        You can import dropdown style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/dropdown/_dropdown'
                         `}
                    />
                    <Description markdown={dedent`
                        You can import dropdown web component with following  
                    `}/>
                    <Source
                        language='js'
                        code={dedent`
                            import 'appolodev-ui-kit/src/components/dropdown/dropdown'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the accordions
                        
                        | CSS Variable                                | Default value                  |
                        | ------------------------------------------- |:------------------------------:|
                        | --dropdown-border-radius                    | 4px                            | 
                        | --dropdown-border-color                     | --color-neutral-500            |
                        | --dropdown-background-color                 | --white                        |
                        | --dropdown-item-color                       | --color-neutral-600            |
                        | --dropdown-item-background-color            | --white                        |
                        | --dropdown-item-vertical-padding            | 16px                           |
                        | --dropdown-item-horizontal-padding          | 16px                           |
                       
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

export const Basic = (args) => Dropdown(args);
