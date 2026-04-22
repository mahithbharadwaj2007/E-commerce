function FooterSection({ title, links }) {
  return (
    <div className="col mb-3">
      {" "}
      <h5>{title}</h5>{" "}
      <ul className="nav flex-column">
        {" "}
        {links.map((link) => (
          <li className="nav-item mb-2" key={link}>
            <a href="#" className="nav-link p-0 text-body-secondary">
              {link}
            </a>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default FooterSection;
