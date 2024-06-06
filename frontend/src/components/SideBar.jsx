import { Layout, Menu } from 'antd';
import items from './MenuItems';
import '../Styles/Sidebar.css'

const { Sider } = Layout;
const expandedLogo = '../assets/brandLogo.png';
const collapsedLogo = 'https://assets-global.website-files.com/64d0758245286f4d631b681c/64d9d32fbec48c7910b6b5ee_breathe-esg-fav-icon.png';

const Sidebar = ({ collapsed, onCollapse }) => (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className='bg-[#181818] w-[250px]'>
      <div className="logo" style={{ padding: '16px', textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={collapsed ? collapsedLogo : expandedLogo} // Conditionally render the logo
          alt="Logo"
          style={collapsed ? { width: '30px', height: 'auto' } : { width: '150px', height: 'auto' }} // Conditionally apply styles
          />
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} className='bg-[#181818]'/>
    </Sider>
  );

export default Sidebar;
