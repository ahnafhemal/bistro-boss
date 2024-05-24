import { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import BannerCover from "../../Components/BannerCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  console.log(category)
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <BannerCover
        bgImage={orderCoverImg}
        coverTitle="Our Foods"
        coverPara="Would you like to try a dish?"
      ></BannerCover>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab itemName={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab itemName={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
