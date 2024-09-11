import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Site from "./Components/Site";
import Tank from "./Components/Tank";
import Material from "./Components/Material";
import Balance_Sheet from "./Components/Balance_Sheet";
import Daily_Feed from "./Components/Daily_Feed";
import Diseases_Medicines from "./Components/Diseases_Medicine";
import Electricity from "./Components/Electricity";
import Feed_Stock from "./Components/Feed_Stock";
import Feed_Stock_add from "./Components/Feed_Stock_add";
import Feed_Stock_view from "./Components/Feed_Stock_view";
import Feed_Stock_subtract from './Components/Feed_Stock_subtract';
import Harvesting from "./Components/Harvesting";
import Manpower from "./Components/Manpower";
import Monthly_Growth from "./Components/Monthly_Growth";
import Other_Sources from "./Components/Other_Sources";
import Seed_Details from "./Components/Seed_Details";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/site-details" element={<Site />} />
      <Route path="/tank-details" element={<Tank />} />
      <Route path="/material-details" element={<Material />} />
      <Route path="/seed-details" element={<Seed_Details />} />
      <Route path="/feed-stock" element={<Feed_Stock />} />
      <Route path="/feed-stock/view" element={<Feed_Stock_view/>}/>
      <Route path="/feed-stock/add" element={<Feed_Stock_add/>}/>
      <Route path="/feed-stock/subtract" element={<Feed_Stock_subtract/>}/>
      <Route path="/daily-feed" element={<Daily_Feed />} />
      <Route path="/seed-growth" element={<Monthly_Growth />} />
      <Route path="/diseases-medicines" element={<Diseases_Medicines />} />
      <Route path="/electricity" element={<Electricity />} />
      <Route path="/man-power" element={<Manpower />} />
      <Route path="/other-sources" element={<Other_Sources />} />
      <Route path="/harvesting" element={<Harvesting />} />
      <Route path="/balance-sheet" element={<Balance_Sheet />} />
    </Routes>
  </Router>
);

export default Root;
