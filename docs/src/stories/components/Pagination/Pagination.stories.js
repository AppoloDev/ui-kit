import './Pagination.scss';
import Pagination from './Pagination';
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
    title: "Components/Pagination",
    component: Pagination,
    argTypes: {
        type: {
            name: 'Variants',
        }
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description>Documentation for pagination component</Description>
                    <Description markdown={dedent`
                        ## Import
                        You can import dropdown style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/pagination/_pagination'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the accordions
                        
                        | CSS Variable                                | Default value                  |
                        | ------------------------------------------- |:------------------------------:|
                        | --pagination-item-color                     | var(--color-neutral-700)       | 
                        | --pagination-item-background-color          | var(--white)                   |
                        | --pagination-item-border-color              | var(--color-neutral-500)       |
                        | --pagination-item-border-radius             | 4px                            |
                        | --pagination-item-horizontal-padding        | 16px                           |
                        | --pagination-item-vertical-padding          | 0                              |
                        | --pagination-item-height                    | 40px                           |
                        | --pagination-item-width                     | 40px                           |
                       
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


export const Basic = (args) => Pagination(args);
