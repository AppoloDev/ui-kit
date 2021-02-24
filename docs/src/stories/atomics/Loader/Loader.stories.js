import './Loader.scss';
import Loader from './Loader';
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
    title: "Atomic/Loader",
    component: Loader,
    argTypes: {},
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description markdown={dedent`
                        ## Import
                        You can import loader style with following  
                    `}/>
                    <Source
                        language='css'
                        code={dedent`
                            @import('appolodev-ui-kit/src/atomics/loader/_loader')
                         `}
                    />
                    <Primary/>
                    <ArgsTable story={PRIMARY_STORY}/>
                    <Stories/>
                </>
            ),
        },
    },
};


export const Basic = (args) => Loader(args);
