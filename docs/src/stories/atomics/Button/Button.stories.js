import './Button.scss';
import Button from './Button';

export default {
    title: "Atomic/Button",
    component: Button,
    argTypes: {
        label: {
            name: 'Label'
        },
        color: {
            name: 'Colors'
        },
        size: {
            name: 'Sizes'
        },
        type: {
            name: 'Types'
        },
        icon: {
            name: 'Icon'
        },
        disabled: {
            name: 'Disabled'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'some component _markdown_',
            },
        },
    },
};

export const Basic = (args) => Button(args);
Basic.args = {label: 'Label'};

export const Color = () => (
    <>
        <div style={{display: "flex"}}>
            <button className="btn btn-primary" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-success" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-danger" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-warning" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-info" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-gris">
                Label
            </button>
        </div>
    </>
);

export const Size = () => (
    <>
        <div style={{display: "flex", marginBottom: 16}}>
            <button className="btn btn-primary btn-small" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-primary btn-medium" style={{marginRight: 16}}>
                Label
            </button>
            <button className="btn btn-primary btn-large" style={{marginRight: 16}}>
                Label
            </button>
        </div>

        <button className="btn btn-primary btn-block">
            Label
        </button>
    </>
);

export const Type = () => (
    <>
        <div style={{display: "flex"}}>
            <button className="btn btn-primary btn-outline" style={{marginRight: 16}}>
                Label
            </button>

            <button className="btn btn-primary btn-ghost" style={{marginRight: 16}}>
                Label
            </button>

            <button className="btn btn-primary btn-link" style={{marginRight: 16}}>
                Label
            </button>

            <button className="btn btn-primary" disabled style={{marginRight: 16}}>
                Label
            </button>
        </div>
    </>
);

export const Icon = () => (
    <>
        <div style={{display: "flex"}}>
            <button className="btn btn-primary btn-icon-left" style={{marginRight: 16}}>
                <svg
                    className="feather feather-plus"
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

                Label
            </button>
            <button className="btn btn-primary btn-icon-right" style={{marginRight: 16}}>
                Label

                <svg
                    className="feather feather-plus"
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
            </button>
        </div>
    </>
);
