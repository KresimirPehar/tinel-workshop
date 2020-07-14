const flexMixin = (alignItems = 'unset', justifyContent = 'unset') => `
    display: flex;
    align-items: ${alignItems}
    justify-content: ${justifyContent};
`;

const sizeMixin = (width, height) => `
    width: ${width};
    height: ${height};
`;

export { flexMixin, sizeMixin };
