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
        }
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Description>Documentation for dropdown component</Description>
                    <Description>You can import dropdown with following</Description>
                    <Source
                        language='scss'
                        code={dedent`
                            @import('appolodev-ui-kit/src/atomics/dropdown/_dropdown')
                         `}
                    />
                    <Source
                        language='js'
                        code={dedent`
                            import 'appolodev-ui-kit/src/components/dropdown/dropdown'
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

export const Basic = (args) => Dropdown(args);
