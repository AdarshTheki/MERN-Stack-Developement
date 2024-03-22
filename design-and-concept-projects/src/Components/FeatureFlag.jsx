/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import Pagination from './1_Pagination';
import PaginationAdvanced from './1_PaginationAdvanced';
import Accordion from './2_Accordion';
import AccordionAdvanced from './2_AccordionAdvanced';
import ModalDialog from './3_ModalDialog';
import OnClickOutside from './3_OnClickOutside';
import StepProgressbar from './4_StepProgressbar';
import Tooltip from './5_Tooltip';
import LoadMore from './6_LoadMore';
import FilterAdvanced from './7_FilterAdvanced';
import FilterCards from './7_FilterCards';
import ImageSlider from './8_ImageSlider';
import MusicPlayer from './9_MusicPlayer';
import Loader from './10_Loader';
import ProgressBar from './11_ProgressBar';
import RippleEffect from './12_RippleEffect';
import DndPackage from './13_DndPackage';
import DragAndDropLists from './13_DragAndDropLists';
import DragAndDropSides from './13_DragAndDropSides';
import FormValidation from './14_FormValidation';
import ProgressiveImage from './15_ProgressiveImage';
import DebounceApiCall from './16_DebounceApiCall';
import ScrolledIndicator from './17_ScrolledIndicator';
import ScrollToTopBottom from './18_ScrollToTopBottom';
import ScrollToSection from './18_ScrollToSection';
import SearchAutoComplete from './19_SearchAutoComplete';
import StarRating from './20_StarRating';
import TabbedContent from './21_TabbedContent';
import TreeViews from './22_TreeViews';
import RandomColor from './24_RandomColor';
import TipCalculator from './25_TipCalculator';
import TicTacToe from './26_TicTacToe';
import BmiCalculator from './27_BmiCalculator';
import DigitalClock from './28_DigitalClock';
import CountdownTimer from './29_CountdownTimer';
import QRCodeGenerator from './30_QRCodeGenerator';
import LocalStorage from './31_LocalStorage';
import ThemeSwitch from './32_ThemeSwitch';
import InfinityScrolling from './33_InfinityScrolling';
import WindowResize from './34_WindowResize';
import CurrencyConverter from './35_CurrencyConverter';

const dummyData = {
    showPagination: true,
    showPaginationAdvanced: true,
    showAccordion: true,
    showAccordionAdvanced: true,
    showModalDialog: true,
    showOnClickOutside: true,
    showStepProgressbar: true,
    showTooltip: true,
    showLoadMore: true,
    showFilterAdvanced: true,
    showFilterCards: true,
    showImageSlider: true,
    showMusicPlayer: true,
    showLoader: true,
    showProgressBar: true,
    showRippleEffect: true,
    showDndPackage: true,
    showDragAndDropLists: true,
    showDragAndDropSides: true,
    showFormValidation: true,
    showProgressiveImage: true,
    showDebounceApiCall: true,
    showScrolledIndicator: true,
    showScrollToTopBottom: true,
    showScrollToSection: true,
    showSearchAutoComplete: true,
    showStarRating: true,
    showTabbedContent: true,
    showTreeViews: true,
    showRandomColor: true,
    showTipCalculator: true,
    showTicTacToe: true,
    showBmiCalculator: true,
    showDigitalClock: true,
    showCountdownTimer: true,
    showQRCodeGenerator: true,
    showLocalStorage: true,
    showThemeSwitch: true,
    showInfinityScrolling: true,
    showWindowResize: true,
    showCurrencyConverter: true,
};

function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyData) setTimeout(resolve(dummyData), 2000);
        else reject('Something was wrong ! Try again letter.');
    });
}

// create Context
export const FeatureFlagContext = createContext();

function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(true);
    const [enableFlag, setEnableFlag] = useState({});

    useEffect(() => {
        async function fetchFeatureFlag() {
            try {
                const result = await featureFlagDataServiceCall();
                setEnableFlag(result);
            } catch (error) {
                throw new Error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchFeatureFlag();
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ enableFlag, loading }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

// Main Feature Flag Components
function FeatureFlagComponents() {
    const { loading, enableFlag } = useContext(FeatureFlagContext);

    const componentsToRender = [
        { key: 'showPagination', component: <Pagination />, name: 'Pagination' },
        {
            key: 'showPaginationAdvanced',
            component: <PaginationAdvanced />,
            name: 'PaginationAdvanced',
        },
        { key: 'showAccordion', component: <Accordion />, name: 'Accordion' },
        {
            key: 'showAccordionAdvanced',
            component: <AccordionAdvanced />,
            name: 'AccordionAdvanced',
        },
        { key: 'showModalDialog', component: <ModalDialog />, name: 'Modal Dialog' },
        { key: 'showOnClickOutside', component: <OnClickOutside />, name: 'OnClick Outside' },
        { key: 'showStepProgressbar', component: <StepProgressbar />, name: 'Step Progressbar' },
        { key: 'showTooltip', component: <Tooltip />, name: 'Tooltip' },
        { key: 'showLoadMore', component: <LoadMore />, name: 'Load More Data' },
        { key: 'showFilterAdvanced', component: <FilterAdvanced />, name: 'Filter Advanced' },
        { key: 'showFilterCards', component: <FilterCards />, name: 'Filter Cards' },
        { key: 'showImageSlider', component: <ImageSlider />, name: 'ImageSlider' },
        { key: 'showMusicPlayer', component: <MusicPlayer />, name: 'MusicPlayer' },
        { key: 'showLoader', component: <Loader />, name: 'Loader' },
        { key: 'showProgressBar', component: <ProgressBar />, name: 'ProgressBar' },
        { key: 'showRippleEffect', component: <RippleEffect />, name: 'Button Ripple Effect' },
        { key: 'showDndPackage', component: <DndPackage />, name: 'DndPackage' },
        { key: 'showDragAndDropLists', component: <DragAndDropLists />, name: 'Drag And Drop Lists' },
        { key: 'showDragAndDropSides', component: <DragAndDropSides />, name: 'Drag And Drop Sides' },
        { key: 'showFormValidation', component: <FormValidation />, name: 'Form Validation' },
        { key: 'showProgressiveImage', component: <ProgressiveImage />, name: 'Progressive Image' },
        { key: 'showDebounceApiCall', component: <DebounceApiCall />, name: 'Debounce Api Call' },
        {
            key: 'showScrolledIndicator',
            component: <ScrolledIndicator />,
            name: 'Scrolled Indicator',
        },
        {
            key: 'showScrollToTopBottom',
            component: <ScrollToTopBottom />,
            name: 'Scroll To Top Bottom',
        },
        { key: 'showScrollToSection', component: <ScrollToSection />, name: 'ScrollToSection' },
        {
            key: 'showSearchAutoComplete',
            component: <SearchAutoComplete />,
            name: 'Search AutoComplete',
        },
        { key: 'showStarRating', component: <StarRating />, name: 'Star Rating' },
        { key: 'showTabbedContent', component: <TabbedContent />, name: 'Tabbed Content' },
        { key: 'showTreeViews', component: <TreeViews />, name: 'Tree Views' },
        { key: 'showRandomColor', component: <RandomColor />, name: 'Random Color Generator' },
        { key: 'showTipCalculator', component: <TipCalculator />, name: 'Tip Calculator' },
        { key: 'showTicTacToe', component: <TicTacToe />, name: 'TicTacToe Game' },
        { key: 'showBmiCalculator', component: <BmiCalculator />, name: 'Bmi Calculator' },
        { key: 'showDigitalClock', component: <DigitalClock />, name: 'Digital Clock' },
        { key: 'showCountdownTimer', component: <CountdownTimer />, name: 'Countdown Timer' },
        { key: 'showQRCodeGenerator', component: <QRCodeGenerator />, name: 'QR CodeGenerator' },
        { key: 'showLocalStorage', component: <LocalStorage />, name: 'LocalStorage' },
        { key: 'showThemeSwitch', component: <ThemeSwitch />, name: 'ThemeSwitch' },
        { key: 'showWindowResize', component: <WindowResize />, name: 'WindowResize' },
        {
            key: 'showCurrencyConverter',
            component: <CurrencyConverter />,
            name: 'Currency Converter',
        },
        {
            key: 'showInfinityScrolling',
            component: <InfinityScrolling />,
            name: 'Infinity Scrolling',
        },
    ];

    function checkEnableFlag(current) {
        return enableFlag[current];
    }

    if (loading) return <h2 className='wrapper'>Loading ! Please wait...</h2>;

    return (
        <div>
            {componentsToRender.map((item) =>
                checkEnableFlag(item.key) ? (
                    <div key={item.key} className='wrapper'>
                        <h2>{item.name}:</h2>
                        <div>{item.component}</div>
                    </div>
                ) : null
            )}
        </div>
    );
}

// Wrapper Context API Final Components Exports
export default function FeatureFlag() {
    return (
        <FeatureFlagGlobalState>
            <FeatureFlagComponents />
        </FeatureFlagGlobalState>
    );
}
