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
                    <Description>Documentation for accordion component</Description>
                    <Description>You can import button with following</Description>
                    <Source
                        language='css'
                        code={dedent`
                            @import('~uikit/atomics/accordion/accordion')
                         `}
                    />
                    <Source
                        language='js'
                        code={dedent`
                            import '~uikit/atomics/accordion/accordion'
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
