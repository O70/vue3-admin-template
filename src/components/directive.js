const handleResize = callback => {
    const height = document.body.clientHeight;
    callback(height);
};

function install(app) {
    app.directive('resize', (el, { value }) => {
        handleResize(value);
        window.addEventListener('resize', () => handleResize(value));
    });
}

export default { install };
