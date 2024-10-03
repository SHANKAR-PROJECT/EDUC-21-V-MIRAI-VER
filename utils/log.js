const chalk = require('chalk');

async function getGradient() {
    const gradient = await import('gradient-string');
    return gradient.default; // .default ko use karen kyunki `gradient-string` ek ES module hai.
}

module.exports = async (data, option) => {
    const gradient = await getGradient();
    const gradientBold = gradient(['blue', 'green', 'white']).multiline;

    switch (option) {
        case "warn":
            console.log(chalk.bold.hex("#FFA500")(gradientBold('[ Warning ] » \n') + data));
            break;
        case "error":
            console.log(chalk.bold.hex("#FF0000")(gradientBold('[ Error ] » \n') + data));
            break;
        default:
            var gradText = gradientBold(`${option} » \n${data}`);
            console.log(gradText);
            break;
    }
}

module.exports.loader = async (data, option) => {
    const gradient = await getGradient();
    const gradientBold = gradient(['blue', 'green', 'white']).multiline;

    switch (option) {
        case "success":
            console.log(chalk.bold.hex("#90EE90")(gradientBold('[ JONELL CC ] ❯ \n') + data));
            break;
        case "warn":
            console.log(chalk.bold.hex("#FFA500")(gradientBold('[ JONELL CC ] ❯ \n') + data));
            break;
        case "error":
            console.log(chalk.bold.hex("#FF0000")(gradientBold('[ JONELL CC ] ❯ \n') + data));
            break;
        default:
            var gradText = gradientBold(`[ JONELL CC ] ❯ \n${data}`);
            console.log(gradText);
            break;
    }
}
