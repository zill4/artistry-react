"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const ArtistryReact_1 = require("modules/ArtistryReact");
const ButtonView_1 = require("./views/button/ButtonView");
const RangeView_1 = require("./views/range/RangeView");
const ToggleView_1 = require("./views/toggle/ToggleView");
const CalendarView_1 = require("./views/calendar/CalendarView");
const ProgressBarView_1 = require("./views/progressBar/ProgressBarView");
const MenuBarView_1 = require("./views/menuBar/MenuBarView");
const ModalView_1 = require("./views/modal/ModalView");
const SectionView_1 = require("./views/section/SectionView");
const CarouselView_1 = require("./views/carousel/CarouselView");
const TabView_1 = require("./views/tab/TabView");
const TableView_1 = require("./views/table/TableView");
const PagerView_1 = require("./views/pager/PagerView");
const ListView_1 = require("./views/list/ListView");
const ScrollableView_1 = require("./views/scrollable/ScrollableView");
const FormView_1 = require("./views/form/FormView");
const FileUploadView_1 = require("./views/file-upload/FileUploadView");
const CodeView_1 = require("./views/code/CodeView");
const DrawerView_1 = require("./views/drawer/DrawerView");
const GridView_1 = require("./views/grid/GridView");
const CardView_1 = require("./views/card/CardView");
const NotificationView_1 = require("./views/notification/NotificationView");
class Application {
    static run() {
        ArtistryReact_1.BodyScroll.init();
        ArtistryReact_1.DepthStack.init();
        ArtistryReact_1.Portal.addElement('layer-fixed', 'layer-fixed');
        ArtistryReact_1.Portal.addElement('layer-overlay', 'layer-overlay');
        ArtistryReact_1.Portal.addElement('layer-flyout', 'layer-flyout');
        ReactDom.render(React.createElement(ArtistryReact_1.Container, { menuBarTop: true, screenSize: "all" },
            React.createElement(MenuBarView_1.default, null),
            React.createElement("h2", null, "Components"),
            React.createElement(ButtonView_1.default, null),
            React.createElement(RangeView_1.default, null),
            React.createElement(ToggleView_1.default, null),
            React.createElement(CalendarView_1.default, null),
            React.createElement(ProgressBarView_1.default, null),
            React.createElement(ModalView_1.default, null),
            React.createElement(DrawerView_1.default, null),
            React.createElement(SectionView_1.default, null),
            React.createElement(CarouselView_1.default, null),
            React.createElement(TabView_1.default, null),
            React.createElement(TableView_1.default, null),
            React.createElement(PagerView_1.default, null),
            React.createElement(ListView_1.default, null),
            React.createElement(ScrollableView_1.default, null),
            React.createElement(FormView_1.default, null),
            React.createElement(FileUploadView_1.default, null),
            React.createElement(CodeView_1.default, null),
            React.createElement(GridView_1.default, null),
            React.createElement(CardView_1.default, null),
            React.createElement(NotificationView_1.default, null)), document.getElementById('layer-root'));
    }
}
exports.default = Application;
//# sourceMappingURL=Application.js.map