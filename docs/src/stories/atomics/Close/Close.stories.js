import './Close.scss';
import Close from './Close';
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
    title: "Atomic/Close",
    component: Close,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description markdown={dedent`
                        ## Import
                        You can import close style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/close/_close'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the close component
                        
                        | CSS Variable                                | Default value                  |
                        | ------------------------------------------- |:------------------------------:|
                        | --close-component-size                      | 42px                           | 
                        | --close-component-border-color              | var(--color-neutral-500)       |
                       
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


export const Basic = (args) => Close(args);
