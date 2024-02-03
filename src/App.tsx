import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Product = lazy(() => import("./Pages/Products"));
const Transactions = lazy(() => import("./Pages/Transactions"));
const Customers = lazy(() => import("./Pages/Customers"));
const NewProduct = lazy(() => import("./Pages//management/NewProduct"));
const ProductManagement = lazy(() => import("./Pages//management/ProductManagement"));
const TransactionManagement = lazy(() => import("./Pages//management/TransactionManagement"));
const BarChart = lazy(() => import("./Pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./Pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./Pages/charts/PieCharts"));
const Coupon = lazy(() => import("./Pages/apps/Coupon"));
const Stopwatch = lazy(() => import("./Pages/apps/Stopwatch"));
const Toss = lazy(() => import("./Pages/apps/Toss"));

const App = () => {
  return(
  <Router>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Link to='/admin/dashboard' >Visit Dashboard</Link>} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/transactions" element={<Transactions />} />
        <Route path="/admin/customers" element={<Customers />} />


        {/* charts */}
        <Route path="/admin/chart/bar" element={<BarChart/>} />
        <Route path="/admin/chart/pie" element={<PieCharts/>} />
        <Route path="/admin/chart/line" element={<LineCharts/>} />

        {/* apps */}
        <Route path="/admin/app/coupon" element={<Coupon/>} />
        <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
        <Route path="/admin/app/toss" element={<Toss/>} />

        
        {/* management */}
        <Route path="/admin/product/new" element={<NewProduct/>} />
        <Route path="/admin/product/:id" element={<ProductManagement/>} />
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />
      </Routes>
    </Suspense>
  </Router>
  );
};

export default App;
