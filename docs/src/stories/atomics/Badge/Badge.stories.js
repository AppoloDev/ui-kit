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
                    <Description>Documentation for badge component</Description>
                    <Description>You can import badge with following</Description>
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

export const Colors = () => (
    <>
        <div style={{display: "flex"}}>
            <div class="badge badge-primary" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-success" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-danger" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-warning" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-info" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-gris">
                New message
            </div>
        </div>
    </>
);

export const Lighter = () => (
    <>
        <div style={{display: "flex"}}>
            <div class="badge badge-primary badge-lighter" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-success badge-lighter" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-danger badge-lighter" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-warning badge-lighter" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-info badge-lighter" style={{marginRight: 16}}>
                New message
            </div>
            <div class="badge badge-gris badge-lighter">
                New message
            </div>
        </div>
    </>
);

export const Rounded = () => (
    <>
        <div style={{display: "flex"}}>
            <div class="badge badge-primary badge-rounded" style={{marginRight: 16}}>
                12
            </div>
            <div class="badge badge-success badge-rounded" style={{marginRight: 16}}>
                12
            </div>
            <div class="badge badge-danger badge-rounded" style={{marginRight: 16}}>
                12
            </div>
            <div class="badge badge-warning badge-rounded" style={{marginRight: 16}}>
                12
            </div>
            <div class="badge badge-info badge-rounded" style={{marginRight: 16}}>
                12
            </div>
            <div class="badge badge-gris badge-rounded">
                12
            </div>
        </div>

        <div style={{display: "flex", marginTop: 16}}>
            <div className="badge badge-primary badge-rounded badge-lighter" style={{marginRight: 16}}>
                12
            </div>
            <div className="badge badge-success badge-rounded badge-lighter" style={{marginRight: 16}}>
                12
            </div>
            <div className="badge badge-danger badge-rounded badge-lighter" style={{marginRight: 16}}>
                12
            </div>
            <div className="badge badge-warning badge-rounded badge-lighter" style={{marginRight: 16}}>
                12
            </div>
            <div className="badge badge-info badge-rounded badge-lighter" style={{marginRight: 16}}>
                12
            </div>
            <div className="badge badge-gris badge-rounded badge-lighter">
                12
            </div>
        </div>
    </>
);
