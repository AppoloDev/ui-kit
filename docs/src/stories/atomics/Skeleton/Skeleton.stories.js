import './Skeleton.scss';
import Skeleton from './Skeleton';
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
    title: "Atomic/Skeleton",
    component: Skeleton,
    argTypes: {
        width: {
            name: 'Width',
            control: {
                type: 'range',
                options: {min: 5, max: 100, step: 5},
            },
        },
        height: {
            name: 'Height',
            control: {
                type: 'range',
                options: {min: 5, max: 25, step: 1},
            },
        },
        radius: {
            name: 'Radius',
            control: {
                type: 'range',
                options: {min: 1, max: 50, step: 1},
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description markdown={dedent`
                        ## Import
                        You can import alert style with following  
                    `}/>
                    <Source
                        language='scss'
                        code={dedent`
                            @import('appolodev-ui-kit/src/atomics/skeleton/_skeleton')
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the alerts
                        
                        | CSS Variable                        | Default value                  |
                        | ----------------------------------- |:------------------------------:|
                        | --skeleton-width                    | 100%                           |
                        | --skeleton-height                   | 12px                           |
                        | --skeleton-border-radius            | 4px                            |
                       
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


export const Basic = (args) => Skeleton(args);
Basic.args = {width: 100, height: 12, radius: 4};

export const Variants = () => (
    <>
        <div class="skeleton"
             style={{'--skeleton-width': '100%', '--skeleton-height': '12px', '--skeleton-border-radius': '4px'}}/>

        <div class="skeleton"
             style={{'--skeleton-width': '100%', '--skeleton-height': '24px', '--skeleton-border-radius': '4px'}}/>

        <div class="skeleton"
             style={{'--skeleton-width': '50%', '--skeleton-height': '12px', '--skeleton-border-radius': '4px'}}/>

        <div class="skeleton"
             style={{'--skeleton-width': '24px', '--skeleton-height': '24px', '--skeleton-border-radius': '50%'}}/>

    </>
);
