import FooterSection from "../FooterSection/FooterSection";
import styles from "./Footer.module.css";

function Footer() {
  const customerPolicies = ["Home", "Features", "Pricing", "FAQs", "About"];

  const usefulLinks = ["Contact Us", "Careers", "Blog", "Support", "Terms"];

  const company = [
    "About Us",
    "Investors",
    "Press",
    "Sustainability",
    "Affiliates",
  ];
  const help = [
    "Customer Care",
    "Track Order",
    "Returns",
    "Shipping Info",
    "Cancellation",
  ];

  const social = ["Facebook", "Instagram", "Twitter", "YouTube", "Pinterest"];

  return (
    <div className={styles.foot}>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <FooterSection
            title="customerPolicies"
            links={customerPolicies}
          ></FooterSection>
          <FooterSection
            title="usefulLinks"
            links={usefulLinks}
          ></FooterSection>
          <FooterSection title="company" links={company}></FooterSection>
          <FooterSection title="help" links={help}></FooterSection>
          <FooterSection title="social" links={social}></FooterSection>
        </footer>{" "}
      </div>
    </div>
  );
}

export default Footer;
