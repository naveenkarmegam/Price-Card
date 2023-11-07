import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceCard from "./PriceCard";
import Header from "./Header";

function App() {
  const package_details = [
    {
      title: "FREE",
      pack: 0,
      features: [
        {
          access: "Single User",
          value: true,
        },
        {
          access: "5GB Storage ",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "Unlimited Private Projects",
          value: false,
        },
        {
          access: "Dedicated Phone Support",
          value: false,
        },
        {
          access: "Free Subdomain",
          value: false,
        },
        {
          access: "Monthly Status Reports",
          value: false,
        }
      ]
    },
    {
      title: "PLUS",
      pack: 9,
      features: [
        {
          access: "5 User",
          value: true,
        },
        {
          access: "50GB Storage",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "Unlimited Private Projects",
          value: true,
        },
        {
          access: "Dedicated Phone Support",
          value: true,
        },
        {
          access: "Free Subdomain",
          value: true,
        },
        {
          access: "Monthly Status Reports",
          value: false,
        }
      ]
    },
    {
      title: "PRO",
      pack: 49,
      features: [
        {
          access: "Unlimited User",
          value: true,
        },
        {
          access: "150GB Storage",
          value: true,
        },
        {
          access: "Unlimited Public Projects",
          value: true,
        },
        {
          access: "Community Access",
          value: true,
        },
        {
          access: "unlimited Private Projects",
          value: true,
        },
        {
          access: "Dedicated Phone Support",
          value: true,
        },
        {
          access: "Free Subdomain",
          value: true,

        },
        {
          access: "Monthly Status Reports",
          value: true,
        }
      ]
    }
  ];
  return (
    <section className="main py-5">
    <div className="container">
      <Header />
      <div className="row justify-content-center align-items-center my-3">
        {package_details.map((item) => {
          return <PriceCard details={item} />;
        })}
      </div>
    </div>
    </section>
  );
}

export default App;
