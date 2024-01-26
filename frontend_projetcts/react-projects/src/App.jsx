import React from 'react';
import Accordion from './Components/Accordion';
import RandomColor from './Components/RandomColor';
import StarRating from './Components/StarRating';
import ImageSlider from './Components/ImageSlider';
import LoadMore from './Components/LoadMore';
import TreeViews from './Components/TreeViews';
import QRCodeGenerator from './Components/QRCodeGenerator';
import ThemeSwitch from './Components/ThemeSwitch';
import ScrolledIndicator from './Components/ScrolledIndicator';
import TabbedContent from './Components/TabbedContent';
import ModalDialog from './Components/ModalDialog';
import GithubProfileFinder from './Components/GithubProfileFinder';
import SearchAutoComplete from './Components/SearchAutoComplete';
import TicTacToe from './Components/TicTacToe';
import UseFetchComponent from './Components/UseFetchComponent';
import OnClickOutside from './Components/OnClickOutside';
import WindowResize from './Components/WindowResize';
import ScrollToTopBottom from './Components/ScrollToTopBottom';
import ScrollToSection from './Components/ScrollToSection';
// import FeatureFlag from './Components/FeatureFlag';

export default function App() {
    return (
        <div>
            {/* <FeatureFlag /> */}

            {/* Collapsible Sections / Accordion */}
            <Accordion />
            {/* Color Picker */}
            <RandomColor />
            {/* Rating System */}
            <StarRating />
            {/* Image Gallery */}
            <ImageSlider />
            {/* Pagination */}
            <LoadMore />
            {/* Tree View Structure */}
            <TreeViews />
            {/* QR Code Generator */}
            <QRCodeGenerator />
            {/* Custom Theme Selector */}
            <ThemeSwitch />
            {/* Scrolled Indicator */}
            <ScrolledIndicator />
            {/* Tabbed Content */}
            <TabbedContent />
            {/* Modal Dialog */}
            <ModalDialog />
            {/* GitHub Profile Viewer */}
            <GithubProfileFinder />
            {/* Auto Complete Search */}
            <SearchAutoComplete />
            {/* Game Board Tic-Tac-Toe */}
            <TicTacToe />

            <UseFetchComponent />

            {/* Click Outside Handler */}
            <OnClickOutside />
            {/* Resize Listener */}
            <WindowResize />
            {/* Scroll To Top/Bottom Button */}
            <ScrollToTopBottom />
            {/* Scroll To Section Link */}
            <ScrollToSection />
        </div>
    );
}
