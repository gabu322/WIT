import Link from 'next/link';

export default function Button({
    children,
    href,
    type,
    onClick,
    width,
    height,
    square,
    color,
    className,
    transparent,
    blank,
    textColor,
    text,
    icon
}) {


    if (textColor == "black") {
        textColor = " text-black";
    } else if (textColor == "red") {
        textColor = " text-red-500";
    } else if (textColor == "green") {
        textColor = " text-green-500";
    } else if (textColor == "yellow") {
        textColor = " text-yellow-500";
    } else if (textColor == "gray") {
        textColor = " text-gray-500";
    } else if (textColor == "pink") {
        textColor = " text-pink-500";
    } else {
        textColor = " text-white";
    }

    if (transparent || color == "transparent") {
        color = " bg-transparent";
        textColor = " text-black font-bold";
    } else if (color == "red") {
        color = " bg-red-500 hover:bg-red-600";
    } else if (color == "green") {
        color = " bg-green-500 hover:bg-green-600";
    } else if (color == "yellow") {
        color = " bg-yellow-500 hover:bg-yellow-600";
    } else if (color == "gray") {
        color = " bg-gray-500 hover:bg-gray-600";
    } else if (color == "pink") {
        color = " bg-pink-500 hover:bg-pink-600";
    } else {
        color = " bg-blue-500 hover:bg-blue-600";
    }


    if (square) {
        width = "40px";
        height = "40px";
    }


    return <button type={type ?? "button"}
        className={"px-3 rounded drop-shadow transition-all duration-200 cursor-pointer font-semibold text-sm " + color + " " + textColor + " " + className}
        style={{
            width: width ??  "fit-content",
            whiteSpace: " nowrap",
            height: height ?? "40px",
            flex: "0 0 auto"
        }}
        onClick={onClick}
    >
        {icon
            ? (<div className='h-4/5 w-4/5'>
                <img src={icon} className='w-full h-full' />

            </div>)
            : (children || text)}

        {href && (<Link href={href} target={blank ? "_blank" : ""} className='top-0 left-0 absolute w-full h-full' />)}
    </button>
}
