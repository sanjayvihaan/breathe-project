import { RiBarChartFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { TbBrandDatabricks } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [

  getItem('Dashboard', '1', <RiBarChartFill />),
  getItem('Entity Manager', '2', <MdManageAccounts />),
  getItem('Data Manager', '3', <FaDatabase />),
  getItem('Reporting', '4', <TbReport />),
  getItem('Materiality', '5', <TbBrandDatabricks />),
  getItem('Suppliers', '6', <IoPeople />),
  getItem('Analytics', '7', <IoAnalyticsSharp />),
  getItem('Targets', '8', <TbTargetArrow />),

  getItem('Logout', '9', <IoLogOut />) // Added class name 'logout-button'
];

console.log(items);


export default items;
