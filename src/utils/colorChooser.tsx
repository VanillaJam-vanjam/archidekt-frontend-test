import { colorBlockStyle, colorSquareStyle } from "../styles/styles.tsx";

const colors = {
    red: [241, 165, 139],
    green: [150, 204, 169],
    blue: [165, 217, 242],
    black: [197, 188, 185],
    white: [249, 246, 209],
    colorless: [198, 188, 186],
}

/**
 * @returns The average of the given colors in css format
 */
function GetColorValue(colorString: string) {
    let r = 0, g = 0, b = 0;
    if (colorString.length === 0) {
        return `rgb(${colors.colorless[0]},${colors.colorless[1]},${colors.colorless[2]})`;
    }
    Array.from(colorString).forEach(element => {
        let colorPart = [0, 0, 0];
        switch (element) {
            case "W":
                colorPart = colors.white;
                break;
            case "U":
                colorPart = colors.blue;
                break;
            case "B":
                colorPart = colors.black;
                break;
            case "R":
                colorPart = colors.red;
                break;
            case "G":
                colorPart = colors.green;
                break;
        }
        r += colorPart[0]!;
        g += colorPart[1]!;
        b += colorPart[2]!;
    });

    r /= colorString.length;
    g /= colorString.length;
    b /= colorString.length;

    return `rgb(${r},${g},${b})`
}

function ColorSquare({ color }: { color: string }) {
    return (
        <div style={{ ...colorSquareStyle, backgroundColor: GetColorValue(color) }} />
    )
}

type ColorBlockProps = {
    colorString: string
}

/**
 * Breaks down the color string and displays colored squares
 * @param {*} colorString String representing the colors in MTG's fomrat (WUBRG) 
 * @returns Colored squares representing the colors of the deck
 */
function ColorBlock({ colorString }: { colorString: string }) {
    console.log(colorString);
    return (
        <div>
            <div style={colorBlockStyle}>
                {
                    Array.from(colorString).map(color => (
                        <ColorSquare color={color} />
                    ))
                }
            </div>
        </div>
    )
}

export default ColorBlock;