import React from "react";

const TextTruncate = ({ lines = 1 }) => {
    return (
        <p
            className="overflow-hidden text-ellipsis"
            style={`-webkit-line-clamp: ${lines}; -webkit-box-orient: vertical; display: -webkit-box`}
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus in
            magni animi id corrupti, tenetur illo ut sunt ad perspiciatis eum
            aut earum nihil voluptas omnis nemo quo similique, assumenda facilis
            sit iure? Reprehenderit, impedit praesentium modi voluptates unde
            sequi neque tempore distinctio quam animi inventore enim molestias
            nisi autem?
        </p>
    );
};

export default TextTruncate;
