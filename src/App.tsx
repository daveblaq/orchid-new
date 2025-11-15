import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import InvestmentService from "./pages/services/InvestmentService";
import LoanService from "./pages/services/LoanService";
import AccessToMarket from "./pages/services/AccessToMarket";
import EntrepreneurshipTraining from "./pages/services/EntrepreneurshipTraining";
import FacilityManagement from "./pages/services/FacilityManagement";
import InsuranceAuditTax from "./pages/services/InsuranceAuditTax";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import SupportServices from "./pages/services/SupportServices";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/investment-calculator"
              element={<InvestmentCalculator />}
            />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="/services/investment"
              element={<InvestmentService />}
            />
            <Route path="/services/loan" element={<LoanService />} />
            <Route
              path="/services/access-to-market"
              element={<AccessToMarket />}
            />
            <Route
              path="/services/entrepreneurship-training"
              element={<EntrepreneurshipTraining />}
            />
            <Route
              path="/services/facility-management"
              element={<FacilityManagement />}
            />
            <Route
              path="/services/insurance-audit-tax"
              element={<InsuranceAuditTax />}
            />
            <Route
              path="/services/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route path="/services/support" element={<SupportServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
