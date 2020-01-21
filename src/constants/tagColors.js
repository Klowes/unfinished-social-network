const tagColors = [
    {
        name: 'magenta',
        hex: '#eb2f96',
    },
    {
        name: 'red',
        hex: '#f5222d',
    },
    {
        name: 'volcano',
        hex: '#fa541c',
    },
    {
        name: 'orange',
        hex: '#fa8c16',
    },
    {
        name: 'gold',
        hex: '#faad14',
    },
    {
        name: 'lime',
        hex: '#a0d911',
    },
    {
        name: 'green',
        hex: '#52c41a',
    },
    {
        name: 'cyan',
        hex: '#13c2c2',
    },
    {
        name: 'blue',
        hex: '#1890ff',
    },
    {
        name: 'geekblue',
        hex: '#2f54eb',
    },
    {
        name: 'purple',
        hex: '#722ed1',
    },
];

export default tagColors;
export const tagColorHexes = tagColors.map(({ hex }) => hex);
export const tagColorNames = tagColors.map(({ name }) => name);
export const getColorHex = n => tagColors.find(({ name }) => name === n).hex;
export const getColorName = h => tagColors.find(({ hex }) => hex === h).name;