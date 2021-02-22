import './Badge.scss';
import Badge from './Badge';
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
    title: "Atomic/Badge",
    component: Badge,
    argTypes: {
        label: {
            name: 'Label'
        },
        color: {
            name: 'Colors'
        },
        lighter: {
            name: 'Lighter'
        },
        rounded: {
            name: 'Rounded'
        }
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description>Documentation for button component</Description>
                    <Description>You can import button with following</Description>
                    <Source
                        language='scss'
                        code={dedent`
                            @import('~uikit/atomics/badge/badge')
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

export const Basic = (args) => Badge(args);
Basic.args = {label: 'New message'};
