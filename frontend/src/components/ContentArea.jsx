import { Layout } from 'antd';
import { theme } from 'antd';

import BarChart from './BarChart'
import PieChart from './PieChat';
import Card from './Card';

const { Content } = Layout;

const ContentArea = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Sample chart data


  return (
    <Content
      style={{
        margin: '16px',
      }}
    >
      {children}
      <div className='flex  mb-4'>
        <Card img='https://cdn-icons-png.flaticon.com/512/179/179452.png' title='New Customers' content='65' />
        <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTA1EIPE-fstbprWlAg7gMpfe71P4TPjfEw&s' title='Existing Customers' content='28' />
        <Card img='https://cdn-icons-png.flaticon.com/512/3126/3126589.png' title='Total Customers' content='93' />
      </div>
      <div style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Render Bar chart component */}
        <BarChart />
        <PieChart />
      </div>
    </Content>
  );
};

export default ContentArea;
