import { Layout } from 'antd';
import Sidebar from '../components/SideBar';
import AppHeader from '../components/Header';
import ContentArea from '../components/ContentArea';
import AppFooter from '../components/Footer';
import { useState } from 'react';

const HomeScreen = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}/>
      <Layout>
        <AppHeader />
        <ContentArea />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default HomeScreen;
