import { Route, Routes } from 'react-router';
import Compose from './components/util/Compose';
import { TitleProvider } from './contexts/TitleContext';
import CustomerLayout from './layouts/Customer';
import HelperLayout from './layouts/Helper';
import ClientView from './pages/customer/ClientView';
import DailyClosingPage from './pages/helper/DailyClosingPage';
import OrdersOverviewPage from './pages/helper/OrdersOverviewPage';
import OrderScreen from './pages/helper/order-screen/OrderScreen';
import SettingsPage from './pages/helper/SettingsPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Compose components={[TitleProvider]}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route element={<HelperLayout />}>
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/overview" element={<OrdersOverviewPage />} />
          <Route path="/closing" element={<DailyClosingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route element={<CustomerLayout />}>
          <Route path="/client" element={<ClientView />} />
        </Route>
      </Routes>
    </Compose>
  );
}
