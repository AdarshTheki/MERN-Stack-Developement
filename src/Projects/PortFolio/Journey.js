import React from "react";
import profile_1 from "./assets/profile_1.png";

const Journey = () => {
  return (
    <>
      <section className='second-section'>
        <span>What I have done so far</span>
        <h1 className='second-section-heading'>
          Eduction 📕 Journey 🏴‍☠️ to see
        </h1>
        <div className='box'>
          <div className='vertical'>
            <img src={profile_1} alt={profile_1} />
            <h1>
              12th Science
              <br />
              <small>(2014-2016)</small>
            </h1>
            <p>
              🧾 Science course subjects include Physics, Chemistry, Maths and
              Statistics, Biology, English, Hindi, Information Technology.
            </p>
            <p>
              College🎓<a href='/'>Kurvey's New Model Junior College Nagpur</a>
            </p>
          </div>
          <div className='vertical'>
            <img src={profile_1} alt={profile_1} />
            <h1>
              B.C.A <br />
              <small>(2016-2019)</small>
            </h1>
            <p>
              📕BCA subjects include web technology, database management system,
              software engineering, operating systems, web technology, and like c, C++, JAVA, HTML, etc.
            </p>
            <p>
              College🎓<a href='/'>Dr.Ambedkar College, Nagpur(DACN)</a>
            </p>
          </div>
          <div className='vertical'>
            <img src={profile_1} alt={profile_1} />
            <h1>
              B.com <br />
              <small>(2020-2023)</small>
            </h1>
            <p>
              ✅ Covering various facts of the Accounting, Business, Management,
              Finance, and Banking domains, the program equips you with
              managerial skills.
            </p>
            <p>
              College🎓<a href='/'>Yashwantrao Chavan Maharashtra University</a>
            </p>
          </div>
          <div className='vertical'>
            <img src={profile_1} alt={profile_1} />
            <h1>
              Coding 🕸
              <br />
              <small>(2021-2023)</small>
            </h1>
            <p>
              🚀 I am starting with C and C++ with basic. Secondly I am start with HTML, CSS, Javascript, tailwind, bootstrap and Create small Project likes portfolio website, landing page, Todo List, Weather App etc. to see the GitHub.
            </p>
            <p>
              <a href='/'>GitHub page is here👨‍👩‍👧‍👦</a>
            </p>
          </div>
        </div>
      </section>
    
      <section className='second-section'>
        <h1 className='second-section-heading'>
          My small Works🏢 and Experience🧪
        </h1>
        <div className='box'>
          <div className='vertical'>
            <br />
            <br />
            <h1>
              Data Entry
              <br />
              <small>(2018-2019)</small>
            </h1>
            <p>Company💻 EDR Continuous Information Private Limited</p>
            <p>
              Works:
              <b>
                {" "}
                Internet Search Operator with USA clients in Material Safety
                Data Sheet (SDS).
              </b>
            </p>
          </div>
          <div className='vertical'>
            <br />
            <br />
            <h1>
              Sales
              <br />
              <small>(2020-full Year)</small>
            </h1>
            <p>Residential & Commercial Plots Heart Of City Nagpur.</p>
            <p>
              Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha,
              Dongargaon & Hingna,
            </p>
          </div>
          <div className='vertical'>
            <br />
            <br />
            <h1>
              Data Entry
              <br />
              <small>(2021-2023)</small>
            </h1>
            <p>
              Fsc Mihan in Nagpur, is known to satisfactorily cater to the
              demands of its customer base.
            </p>
            <p>
              Works:<b>AJIO - Online Shopping Store to check the Product</b>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Journey;
