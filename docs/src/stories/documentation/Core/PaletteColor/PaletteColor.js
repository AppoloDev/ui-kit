import {PureComponent} from "react";
import './PaletteColor.scss'

class PaletteColor extends PureComponent {
    render() {
        if (!this.props.colors || this.props.colors.length === 0) {
            return null;
        }

        return <div className="colorPalette">
            {
                this.props.colors.map((color, index) => {
                    const titleColor = color.size >= 500 ? this.props.colors.find(element => element.size === 100).hex : this.props.colors.find(element => element.size === 900).hex
                    return (
                        <div className="colorItem" key={index}>
                            <div className="color" style={{backgroundColor: color.hex, color: titleColor}}>{color.size}</div>
                            <div className="informations">
                                <div>
                                    <strong>Hex:</strong> {color.hex}
                                </div>
                                <div>
                                    <strong>CSSVar:</strong> {`--color-primary-${color.size}`}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>;
    }
}
export default PaletteColor;
