import React from "react";

function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-la-1">
                <h1>Subash</h1>
                <p>
                  3.1.88 Bharathi Nagar,
                  <br />
                  Sambavarvadakarai 627-856,
                  <br />
                  Tenkasi.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-la">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#nav">Home</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#about">Skills</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#workexp">Work Exprience</a>
                  </li>
                  <li>
                    <iconify-icon inline icon="bx:chevron-right"></iconify-icon>
                    <a href="#contact">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-end text-center">
        <div class="container">
          <div class="row  justify-content-between align-items-center">
            <div class="col-lg-8 col-md-6">
              <div class="footer-mail text-lg-start d-flex align-items-md-start ">
                <p>
                  2024 Designed by<a href="#nav"> Subash.N</a>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-logo text-lg-end text-md-end">
                <a href="https://github.com/Subash-MASA">
                  <iconify-icon icon="mdi:github"></iconify-icon>
                </a>
                <a href="https://www.naukri.com/mnjuser/homepage">
                  <iconify-icon icon="arcticons:naukricom"></iconify-icon>
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7248586871612530688/?origin=NETWORK_CONVERSATIONS&midToken=AQE83vvBgYG3iw&midSig=2_DrWciDoD9Xw1&trk=eml-email_network_conversations_01-network%7Epost-0-wrapper%7Elink&trkEmail=eml-email_network_conversations_01-network%7Epost-0-wrapper%7Elink-null-newfil%7Em33f23sn%7Epk-null-null&eid=newfil-m33f23sn-pk">
                  <iconify-icon icon="bxl:linkedin"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
