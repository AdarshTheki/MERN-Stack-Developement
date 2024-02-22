const dummyData = {
    showLightAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: false,
    showTabs: true,
};

function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyData) setTimeout(resolve(dummyData), 2000);
        else reject('Something was wrong ! Try again letter.');
    });
}

export default featureFlagDataServiceCall;
