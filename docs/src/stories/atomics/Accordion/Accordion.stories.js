import './Accordion.scss';
import Accordion from './Accordion';
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
    title: "Atomic/Accordion",
    component: Accordion,
    argTypes: {
        type: {
            name: 'Variants'
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description markdown={dedent`
                        ## Import
                        You can import accordion style with following  
                    `}/>
                    <Source
                        language='scss'
                        code={dedent`
                            @import('appolodev-ui-kit/src/atomics/accordion/_accordion')
                         `}
                    />
                    <Description markdown={dedent`
                        You can import accordion web component with following  
                    `}/>
                    <Source
                        language='js'
                        code={dedent`
                            import 'appolodev-ui-kit/src/atomics/accordion/accordion'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the accordions
                        
                        | CSS Variable                                | Default value                  |
                        | ------------------------------------------- |:------------------------------:|
                        | --accordion-border-color                    | var(--color-neutral-500)       |
                        | --accordion-header-background-color         | var(--white)                   |
                        | --accordion-header-vertical-padding         | 16px                           |
                        | --accordion-header-horizontal-padding       | 16px                           |
                        | --accordion-panel-background-color          | var(--white)                   |
                        | --accordion-panel-vertical-padding          | 16px                           |
                        | --accordion-bordered-panel-background-color | var(--color-neutral-300)       |
                        | --accordion-bordered-panel-vertical-padding | 24px                           | 
                       
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

export const Basic = (args) => Accordion(args);

export const Variants = () => (
    <>
        <div style={{display: "flex"}}>
            <Accordion type={'bordered'} />
        </div>

        <div style={{display: "flex", marginTop: 24}}>
            <Accordion />
        </div>
    </>
);
