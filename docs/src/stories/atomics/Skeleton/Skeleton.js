import React from "react";
import PropTypes from "prop-types";

function Skeleton(args) {
    console.log(args);
    const width = `${args.width}%`;
    const height = `${args.height}px`;
    const radius = `${args.radius}px`;

    return (
        <div class="skeleton" style={{'--skeleton-width': width, '--skeleton-height': height, '--skeleton-border-radius': radius}} />
    )
}

Skeleton.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
}

export default Skeleton;
