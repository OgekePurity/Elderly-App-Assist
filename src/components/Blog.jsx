import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import bookImg from "../img/book.webp";
import arthImg from "../img/arth.png";
import atrialImg from "../img/atrial.png";
import hyperImg from "../img/hyper.png";
import diaImg from "../img/dia.png";
import heartImg from "../img/heart.png";
import alzImg from "../img/alz.png";
import cancerImg from "../img/cancer.png";
import pneuImg from "../img/pneu.png";
import visualImg from "../img/visual.png";
import hearingImg from "../img/hearing.png";
import chronImg from "../img/chron.png";
import depressionImg from "../img/depression.png";
import strokeImg from "../img/stroke.png";
import parkinsonImg from "../img/parkinson.png";
import cataractsImg from "../img/cataracts.png";
import copdImg from "../img/copd.png";
import gerdImg from "../img/gerd.png";
import divertImg from "../img/divert.png";
import urinaryImg from "../img/urinary.png";
import osteoImg from "../img/osteo.png";
import macularImg from "../img/macular.png";
import goutImg from "../img/gout.png";
import shineImg from "../img/shine.png";
import dementiaImg from "../img/dementia.png";
import sleepImg from "../img/sleep.png";
import rheumaImg from "../img/rheuma.png";
import dvtImg from "../img/dvt.png";
import heriniatedImg from "../img/heriniated.png";
import chronickidneyImg from "../img/chronickidney.png";
import celiacImg from "../img/celiac.png";
import ibdImg from "../img/ibd.png";
import padImg from "../img/pad.png";
import gallImg from "../img/gall.png";
import hypoImg from "../img/hypo.png";
import carpalImg from "../img/carpal.png";
import pancreaImg from "../img/pancrea.png";
import bronchImg from "../img/bronch.png";

import osteomalImg from "../img/osteomal.png";
import glaucomaImg from "../img/glaucoma.png";
import bphImg from "../img/bph.png";
import "./global.css";
import "./blog.css";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  // Dummy data for articles
  const articles = [
    {
      title: "Arthritis",
      description:
        "Aging often brings arthritis, causing joint pain and stiffness. Gentle exercises like swimming and yoga can help manage symptoms. Consult your doctor for personalized treatment.",
      image: arthImg,
    },
    {
      title: "Osteoporosis",
      description:
        "Bones can weaken with age, leading to osteoporosis. Ensure a diet rich in calcium and Vitamin D. Regular weight-bearing exercises like walking or dancing can strengthen bones.",
      image: osteoImg,
    },
    {
      title: "Hypertension",
      description:
        "High blood pressure is common in seniors. Monitoring your salt intake and staying physically active are key. Medication may be necessary for controlling hypertension.",
      image: hyperImg,
    },
    {
      title: "Diabetes Management",
      description:
        "Diabetes requires careful management as we age. Monitor blood sugar levels regularly and maintain a healthy diet. Physical activity helps regulate blood sugar.",
      image: diaImg,
    },
    {
      title: "Heart Disease",
      description:
        "Seniors are at higher risk of heart disease. Eating heart-healthy foods like fruits, vegetables, and whole grains is crucial. Regular check-ups can detect issues early.",
      image: heartImg,
    },
    {
      title: "Alzheimer's Disease",
      description:
        "Alzheimer's affects memory and cognition in older adults. Creating routines and using memory aids can be helpful. Seek support from family and healthcare professionals.",
      image: alzImg,
    },
    {
      title: "Cancer Awareness",
      description:
        "Regular screenings can detect cancer early in older adults. Quitting smoking and maintaining a balanced diet can reduce risks. Stay informed about screening recommendations.",
      image: cancerImg,
    },
    {
      title: "Pneumonia Prevention",
      description:
        "Pneumonia can be serious for seniors. Vaccinations and good hygiene help prevent infections. Recognize symptoms like fever or difficulty breathing early on.",
      image: pneuImg,
    },
    {
      title: "Vision Impairment",
      description:
        "Aging can lead to vision problems like cataracts or macular degeneration. Regular eye exams and wearing glasses as prescribed can improve vision. Adjust lighting at home for better visibility.",
      image: visualImg,
    },
    {
      title: "Hearing Loss",
      description:
        "Hearing loss is common in older adults. Hearing aids can improve hearing and quality of life. Reduce background noise for better communication.",
      image: hearingImg,
    },
    {
      title: "Chronic Pain",
      description:
        "Managing chronic pain is essential for elderly well-being. Gentle exercises, heat or cold therapies, and medication can provide relief. Discuss a pain management plan with your doctor.",
      image: chronImg,
    },
    {
      title: "Depression in Seniors",
      description:
        "Depression can affect seniors due to life changes or health issues. Engaging in activities you enjoy and talking to loved ones can help. Professional counseling may be beneficial.",
      image: depressionImg,
    },
    {
      title: "Stroke Recovery",
      description:
        "Stroke recovery varies, but rehabilitation can improve outcomes. Physical therapy and speech therapy may be part of the recovery plan. Support from family and therapists is crucial.",
      image: strokeImg,
    },
    {
      title: "Parkinson's Disease",
      description:
        "Parkinson's affects movement and balance in seniors. Medications and physical therapy can manage symptoms. Daily exercises and a supportive environment aid in coping.",
      image: parkinsonImg,
    },
    {
      title: "Cataracts",
      description:
        "Cataracts cloud the lens of the eye, causing blurred vision. Surgery is often a safe and effective treatment to restore clear vision. Discuss options with an eye specialist.",
      image: cataractsImg,
    },
    {
      title: "COPD",
      description:
        "COPD makes breathing difficult due to lung damage. Quitting smoking and medications can help manage symptoms. Pulmonary rehabilitation improves lung function.",
      image: copdImg,
    },
    {
      title: "GERD",
      description:
        "GERD causes acid reflux, leading to heartburn and discomfort. Eating smaller meals and avoiding trigger foods like spicy or fatty foods can ease symptoms. Elevate your head while sleeping.",
      image: gerdImg,
    },
    {
      title: "Arthritis",
      description:
        "Urinary incontinence is common in older adults. Pelvic floor exercises and managing fluid intake can reduce symptoms. Discuss treatment options with a healthcare provider.",
      image: urinaryImg,
    },
    {
      title: "Urinary Incontinence",
      description:
        "Aging often brings arthritis, causing joint pain and stiffness. Gentle exercises like swimming and yoga can help manage symptoms. Consult your doctor for personalized treatment.",
      image: urinaryImg,
    },
    {
      title: "Osteoarthritis",
      description:
        "Osteoarthritis affects joints, causing pain and stiffness. Gentle exercises like swimming or tai chi improve joint flexibility. Using assistive devices like canes or walkers can ease mobility.",
      image: osteoImg,
    },
    {
      title: "Atrial Fibrillation",
      description:
        "Atrial fibrillation is an irregular heartbeat common in seniors. Medications and lifestyle changes like reducing caffeine intake can help manage symptoms. Regular heart check-ups are important.",
      image: atrialImg,
    },
    {
      title: "Macular Degeneration",
      description:
        "Macular degeneration affects central vision in older adults. Eating a diet rich in antioxidants and wearing sunglasses outdoors can protect vision. Regular eye exams monitor changes.",
      image: macularImg,
    },
    {
      title: "Gout",
      description:
        "Gout causes sudden and severe joint pain, often in the big toe. Avoiding purine-rich foods like red meat and alcohol can prevent flare-ups. Medications may be prescribed for acute attacks.",
      image: goutImg,
    },
    {
      title: "Shingles",
      description:
        "Shingles is a painful rash caused by the varicella-zoster virus. Vaccination can prevent shingles or reduce its severity. Antiviral medications help shorten the duration of the illness.",
      image: shineImg,
    },
    {
      title: "Dementia",
      description:
        "Dementia affects memory and cognitive function in seniors. Creating a safe environment and using memory aids can improve daily life. Support groups offer emotional support for caregivers.",
      image: dementiaImg,
    },
    {
      title: "Sleep Apnea",
      description:
        "Sleep apnea causes pauses in breathing during sleep, leading to daytime fatigue. Using a CPAP machine improves breathing and sleep quality. Losing weight and sleeping on your side can also help.",
      image: sleepImg,
    },
    {
      title: "Rheumatoid Arthritis",
      description:
        "Rheumatoid arthritis is an autoimmune disease causing joint inflammation. Medications and physical therapy can manage symptoms. Rest and gentle exercises like yoga or swimming ease joint pain.",
      image: rheumaImg,
    },
    {
      title: "Deep Vein Thrombosis ",
      description:
        "DVT is a blood clot in a deep vein, often in the legs. Moving your legs and avoiding long periods of immobility during travel can reduce risks. Medication may be needed for treatment.",
      image: dvtImg,
    },
    {
      title: "Herniated Disc",
      description:
        "A herniated disc causes back pain due to spinal disc damage. Physical therapy and avoiding heavy lifting can alleviate symptoms. Surgery may be considered for severe cases.",
      image: heriniatedImg,
    },
    {
      title: "Chronic Kidney Disease",
      description:
        "Chronic kidney disease affects kidney function over time. Managing blood pressure and diabetes lowers risks. A kidney-friendly diet and regular check-ups are crucial.",
      image: chronickidneyImg,
    },
    {
      title: "Celiac Disease",
      description:
        "Celiac disease is an autoimmune disorder triggered by gluten consumption. Following a gluten-free diet improves symptoms. Consult a dietitian for guidance on nutritional needs.",
      image: celiacImg,
    },
    {
      title: "Inflammatory Bowel Disease",
      description:
        " IBD includes Crohn's disease and ulcerative colitis, causing inflammation in the digestive tract. Medications and dietary changes manage symptoms. Avoiding stress can reduce flare-ups.",
      image: ibdImg,
    },
    {
      title: "Peripheral Artery Disease",
      description:
        "PAD reduces blood flow to the limbs, causing leg pain and numbness. Walking and quitting smoking improve circulation. Medications and angioplasty may be necessary.",
      image: padImg,
    },
    {
      title: "Gallstones",
      description:
        "Gallstones are hardened deposits in the gallbladder, causing pain and digestive issues. Eating a low-fat diet and maintaining a healthy weight prevent gallstone formation. Surgery may be needed for severe cases.",
      image: gallImg,
    },
    {
      title: "Hypothyroidism",
      description:
        "Hypothyroidism occurs when the thyroid gland produces insufficient hormones. Medication replaces missing hormones. Regular blood tests monitor hormone levels.",
      image: hypoImg,
    },
    {
      title: "Carpal Tunnel Syndrome",
      description:
        "Carpal tunnel syndrome causes hand and wrist pain due to nerve compression. Wearing a wrist splint and avoiding repetitive hand movements relieve symptoms. Surgery may be recommended for severe cases.",
      image: carpalImg,
    },
    {
      title: "Diverticulitis",
      description:
        "Diverticulitis is inflammation or infection of small pouches in the digestive tract. A high-fiber diet and antibiotics treat mild cases. Surgery may be required for complications.",
      image: divertImg,
    },
    {
      title: "Pancreatitis",
      description:
        "Pancreatitis is inflammation of the pancreas, causing severe abdominal pain. Fasting and pain medications manage symptoms. Avoiding alcohol and fatty foods prevent flare-ups.",
      image: pancreaImg,
    },
    {
      title: "Chronic Bronchitis",
      description:
        " Chronic bronchitis is persistent inflammation of the bronchial tubes, causing cough and mucus production. Quitting smoking and using inhalers relieve symptoms. Pulmonary rehabilitation improves lung function.",
      image: bronchImg,
    },
    {
      title: "Osteomalacia",
      description:
        "Osteomalacia is softening of the bones due to vitamin D deficiency. Sun exposure and vitamin D supplements strengthen bones. Calcium-rich foods like dairy products support bone health.",
      image: osteomalImg,
    },
    {
      title: "Glaucoma",
      description:
        "Glaucoma is a condition that damages the optic nerve, leading to vision loss. Regular eye exams can detect glaucoma early. Medications or surgery may be needed to prevent further vision damage.",
      image: glaucomaImg,
    },
    {
      title: "BPH",
      description:
        "BPH is enlargement of the prostate gland in older men, causing urinary symptoms. Medications and lifestyle changes relieve discomfort. Surgical procedures may be considered for severe cases.",
      image: bphImg,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home" className="mainlink">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/journal">JOURNAL</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>

      {/* LANDING PAGE */}
      <div className="landingg">
        <div
          className="landingTextt"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Empowering Elders with{" "}
            <span style={{ color: "#512da8", fontSize: "5vw" }}>
              Knowledge and Care.
            </span>
          </h1>
          <h3>
            "Your Comprehensive Resource for Elderly Health and Well-being."
          </h3>
        </div>
        <div
          className="landingImagee"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img src={bookImg} alt="doctors" className="docc" />
        </div>
      </div>

      {/* INPUT SEARCH BAR BELOW THIS LINE */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        ></input>
      </div>

      {/* CARDS SECTION */}
      <div className="cards-container">
        {filteredArticles.map((article, index) => (
          <div key={index} className="card">
            {/* Display the image for each article */}
            <img
              src={article.image}
              alt={`Image for ${article.title}`}
              className="immg"
            />
            <div className="card__content">
              <p className="card__title">{article.title}</p>
              <p className="card__description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SECTION */}
      {/* <div className="footer">
        <h1>Elderly Companion</h1>
        <div className="footerlinks">
          <Link to="/home" className="mainlink">
            HOME
          </Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/doctors">DOCTORS</Link>
          <Link to="/appointments">APPOINTMENTS</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/journal">JOURNAL</Link>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;
