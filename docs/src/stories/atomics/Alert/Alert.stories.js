import './Alert.scss';
import Alert from './Alert';
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
    title: "Atomic/Alert",
    component: Alert,
    argTypes: {
        label: {
            name: 'Label'
        },
        color: {
            name: 'Colors'
        },
        icon: {
            name: 'Icon'
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
                        language='css'
                        code={dedent`
                            @import 'appolodev-ui-kit/src/atomics/alert/_alert'
                         `}
                    />
                    <Description markdown={dedent`
                        ## Variables
                        You can override the following CSS variables to change the style of the alerts
                        
                        | CSS Variable                        | Default value                  |
                        | ----------------------------------- |:------------------------------:|
                        | --alert-vertical-padding            | 24px                           |
                        | --alert-horizontal-padding          | 32px                           |
                        | --alert-vertical-margin             | 8px                            |
                        | --alert-horizontal-margin           | 0px                            |
                        | --alert-background-color            | --color-primary-100            |
                        | --alert-color                       | --color-primary-700            |
                        | --alert-border-radius               | 4px                            |
                       
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

export const Basic = (args) => Alert(args);
Basic.args = {label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis explicabo laudantium magnam mollitia pariatur quibusdam reiciendis, voluptatibus? Eligendi est facilis hic maxime optio pariatur rem repellat soluta ut velit?'};

export const Colors = () => (
    <>
        <div>
            <div class="alert alert-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis explicabo laudantium magnam
                mollitia pariatur quibusdam reiciendis, voluptatibus? Eligendi est facilis hic maxime optio pariatur rem
                repellat soluta ut velit?
            </div>
            <div class="alert alert-success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fugit ipsa libero nostrum sed sint
                veniam voluptatem? Atque dolor dolore, eligendi ex iure natus quisquam repudiandae sint tempore veniam
                veritatis!
            </div>
            <div class="alert alert-danger">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam aspernatur earum eum,
                impedit maxime nobis nulla odit omnis pariatur porro quam repellendus reprehenderit sunt temporibus
                veritatis voluptas voluptates?
            </div>
            <div class="alert alert-warning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eveniet illum laboriosam mollitia odio
                omnis quo rem sequi sit, veritatis! Dolor molestias nisi quia sunt tempore? Alias eaque quaerat sit.
            </div>
            <div class="alert alert-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus id, itaque natus quos
                velit veritatis voluptatibus. Dolorum, facere ipsam ipsum libero, minus molestias neque nisi nulla
                officia, quidem reiciendis?
            </div>
            <div class="alert alert-gris">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A et illo impedit ipsum obcaecati quas quasi
                voluptas. Asperiores delectus distinctio dolorem, eaque eius eos esse inventore perspiciatis, ratione
                veritatis voluptate!
            </div>
            <div className="alert alert-neutral">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A et illo impedit ipsum obcaecati quas quasi
                voluptas. Asperiores delectus distinctio dolorem, eaque eius eos esse inventore perspiciatis, ratione
                veritatis voluptate!
            </div>
        </div>
    </>
);

export const Icons = () => (
    <>
        <div>
            <div class="alert alert-primary">
                <svg
                    class="feather feather-plus"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="12"
                        x2="12"
                        y1="5"
                        y2="19"
                    />
                    <line
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                    />
                </svg>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti, distinctio doloribus eos error
                harum illum impedit labore laudantium neque odio omnis possimus provident quae quam, quasi quibusdam
                soluta, vitae?
            </div>
        </div>
    </>
);
