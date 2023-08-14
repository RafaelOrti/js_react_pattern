para el proyecto anterior muestrame un ejemplo lo mas profesional posible de 

haz mas profesional el codigo anterior


src/
|-- assets/
|   |-- images/
|   |   |-- logo.png
|   |   |-- ...
|   |
|   |-- styles/
|   |   |-- global.css
|   |   |-- variables.css
|   |   |-- ...
|
|-- components/
|   |-- Common/
|   |   |-- Button/
|   |   |   |-- Button.js
|   |   |   |-- ButtonStyles.js
|   |   |
|   |   |-- Input/
|   |   |   |-- Input.js
|   |   |   |-- InputStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- Header/
|   |   |-- Header.js
|   |   |-- HeaderStyles.js
|   |   |
|   |   |-- HeaderMenu/
|   |   |   |-- HeaderMenu.js
|   |   |   |-- HeaderMenuStyles.js
|   |   |   |
|   |   |   |-- MenuItem/
|   |   |   |   |-- MenuItem.js
|   |   |   |   |-- MenuItemStyles.js
|   |   |   |
|   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- Sidebar/
|   |   |-- Sidebar.js
|   |   |-- SidebarStyles.js
|   |   |
|   |   |-- SidebarItem/
|   |   |   |-- SidebarItem.js
|   |   |   |-- SidebarItemStyles.js
|   |   |
|   |   |   |-- ...
|   |
|   |-- ...
|
|-- containers/
|   |-- Home/
|   |   |-- Home.js
|   |   |-- HomeStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- Dashboard/
|   |   |-- Dashboard.js
|   |   |-- DashboardStyles.js
|   |   |
|   |   |-- DashboardChart/
|   |   |   |-- DashboardChart.js
|   |   |   |-- DashboardChartStyles.js
|   |   |   |
|   |   |   |-- ChartLegend/
|   |   |   |   |-- ChartLegend.js
|   |   |   |   |-- ChartLegendStyles.js
|   |   |   |
|   |   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- AdminPanel/
|   |   |-- AdminPanel.js
|   |   |-- AdminPanelStyles.js
|   |   |
|   |   |-- UserList/
|   |   |   |-- UserList.js
|   |   |   |-- UserListStyles.js
|   |   |
|   |   |   |-- ...
|   |
|   |-- Charts/
|   |   |-- LineChart/
|   |   |   |-- LineChart.js
|   |   |   |-- LineChartStyles.js
|   |   |   |
|   |   |   |-- LineChartTooltip/
|   |   |   |   |-- LineChartTooltip.js
|   |   |   |   |-- LineChartTooltipStyles.js
|   |   |   |
|   |   |   |   |-- ...
|   |   |
|   |   |-- DateRangePicker/
|   |   |   |-- DateRangePicker.js
|   |   |   |-- DateRangePickerStyles.js
|   |   |
|   |   |   |-- DatePicker/
|   |   |   |   |-- DatePicker.js
|   |   |   |   |-- DatePickerStyles.js
|   |   |
|   |   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- ...
|
|-- pages/
|   |-- Home.js
|   |-- Home.test.js
|   |-- Dashboard.js
|   |-- Dashboard.test.js
|   |-- Admin.js
|   |-- ChartsPage.js
|   |-- ...
|
|-- utils/
|   |-- api.js
|   |-- helpers.js
|
|-- App.js
|-- index.js
|
|-- context/
|   |-- AuthContext.js
|   |-- RoleContext.js
|   |-- SubscriptionContext.js
|   |-- ThemeContext.js
|   |-- ...
|
|-- hooks/
|   |-- useLocalStorage.js
|   |-- useTheme.js
|   |-- ...
|
|-- routes/
|   |-- PrivateRoute.js
|   |-- AdminRoute.js
|   |-- PremiumRoute.js
|   |-- ...
|
|-- store/
|   |-- actions/
|   |   |-- userActions.js
|   |   |
|   |   |-- ...
|   |
|   |-- reducers/
|   |   |-- userReducer.js
|   |   |
|   |   |-- ...
|   |
|   |-- store.js
|
|-- theme/
|   |-- colors.js
|   |-- typography.js
|   |-- theme.js
|
|-- translations/
|   |-- en.json
|   |-- es.json
|
|-- tests/
|   |-- unit/
|   |   |-- components/
|   |   |   |-- Common/
|   |   |   |   |-- Button.test.js
|   |   |   |   |-- Input.test.js
|   |   |   |   |-- ...
|   |   |
|   |   |-- containers/
|   |   |   |-- Home.test.js
|   |   |   |-- Dashboard.test.js
|   |   |   |-- AdminPanel.test.js
|   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- integration/
|   |   |-- components/
|   |   |   |-- ...
|   |   |
|   |   |-- containers/
|   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- setup/
|   |   |-- test-setup.js
|   |   |-- ...
|   |
|   |-- utils/
|   |   |-- api.test.js
|   |   |-- helpers.test.js
|   |   |-- ...
|
|-- index.js
|-- serviceWorker.js
|
|-- config.js
|-- constants.js
|-- setupTests.js
|-- .eslintrc.js
|-- .prettierrc.js
|-- package.json
|-- README.md









src/
|-- assets/
|   |-- images/
|   |   |-- logo.png
|   |   |-- ...
|   |
|   |-- styles/
|   |   |-- global.css
|   |   |-- variables.css
|   |   |-- ...
|
|-- components/
|   |-- Common/
|   |   |-- Button/
|   |   |   |-- Button.js
|   |   |   |-- ButtonStyles.js
|   |   |
|   |   |-- Input/
|   |   |   |-- Input.js
|   |   |   |-- InputStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- Header/
|   |   |-- Header.js
|   |   |-- HeaderStyles.js
|   |   |
|   |   |-- HeaderMenu/
|   |   |   |-- HeaderMenu.js
|   |   |   |-- HeaderMenuStyles.js
|   |   |   |
|   |   |   |-- MenuItem/
|   |   |   |   |-- MenuItem.js
|   |   |   |   |-- MenuItemStyles.js
|   |   |   |
|   |   |-- ...
|   |
|   |-- Sidebar/
|   |   |-- Sidebar.js
|   |   |-- SidebarStyles.js
|   |   |
|   |   |-- SidebarItem/
|   |   |   |-- SidebarItem.js
|   |   |   |-- SidebarItemStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- ...
|
|-- containers/
|   |-- Home/
|   |   |-- Home.js
|   |   |-- HomeStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- Dashboard/
|   |   |-- Dashboard.js
|   |   |-- DashboardStyles.js
|   |   |
|   |   |-- DashboardChart/
|   |   |   |-- DashboardChart.js
|   |   |   |-- DashboardChartStyles.js
|   |   |   |
|   |   |   |-- ChartLegend/
|   |   |   |   |-- ChartLegend.js
|   |   |   |   |-- ChartLegendStyles.js
|   |   |   |
|   |   |-- ...
|   |
|   |-- AdminPanel/
|   |   |-- AdminPanel.js
|   |   |-- AdminPanelStyles.js
|   |   |
|   |   |-- UserList/
|   |   |   |-- UserList.js
|   |   |   |-- UserListStyles.js
|   |   |
|   |   |-- ...
|   |
|   |-- Charts/
|   |   |-- LineChart/
|   |   |   |-- LineChart.js
|   |   |   |-- LineChartStyles.js
|   |   |   |
|   |   |   |-- LineChartTooltip/
|   |   |   |   |-- LineChartTooltip.js
|   |   |   |   |-- LineChartTooltipStyles.js
|   |   |   |
|   |   |-- DateRangePicker/
|   |   |   |-- DateRangePicker.js
|   |   |   |-- DateRangePickerStyles.js
|   |   |   |
|   |   |   |-- DatePicker/
|   |   |   |   |-- DatePicker.js
|   |   |   |   |-- DatePickerStyles.js
|   |   |   |
|   |   |-- ...
|   |
|   |-- ...
|
|-- pages/
|   |-- Home.js
|   |-- Dashboard.js
|   |-- Admin.js
|   |-- ChartsPage.js
|   |-- ...
|
|-- utils/
|   |-- api.js
|   |-- helpers.js
|
|-- App.js
|-- index.js
|
|-- context/
|   |-- AuthContext.js
|   |-- RoleContext.js
|   |-- SubscriptionContext.js
|   |-- ThemeContext.js
|   |-- ...
|
|-- hooks/
|   |-- useLocalStorage.js
|   |-- useTheme.js
|   |-- ...
|
|-- routes/
|   |-- PrivateRoute.js
|   |-- AdminRoute.js
|   |-- PremiumRoute.js
|   |-- ...
|
|-- store/
|   |-- actions/
|   |   |-- userActions.js
|   |   |
|   |-- reducers/
|   |   |-- userReducer.js
|   |   |
|   |-- store.js
|
|-- theme/
|   |-- colors.js
|   |-- typography.js
|   |-- theme.js
|
|-- translations/
|   |-- en.json
|   |-- es.json
|
|-- tests/
|   |-- unit/
|   |   |-- components/
|   |   |   |-- Common/
|   |   |   |   |-- Button.test.js
|   |   |   |   |-- Input.test.js
|   |   |   |   |-- ...
|   |   |
|   |   |-- containers/
|   |   |   |-- Home.test.js
|   |   |   |-- Dashboard.test.js
|   |   |   |-- AdminPanel.test.js
|   |   |   |-- ...
|   |   |
|   |   |-- ...
|   |
|   |-- integration/
|   |   |-- components/
|   |   |   |-- ...
|   |   |
|   |   |-- containers/
|   |   |   |-- ...
|   |   |
|   |   |-- ...
|
|-- index.js
|-- serviceWorker.js
|
|-- config.js
|-- constants.js
|-- setupTests.js
|-- .eslintrc.js
|-- .prettierrc.js
|-- package.json
|-- README.md
