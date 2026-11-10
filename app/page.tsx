const scholarUrl =
  "https://scholar.google.com/citations?user=m4P-8NMAAAAJ&hl=en";

const news = [
  {
    date: "2026-09",
    text: 'Our paper "Gen-lyph" has been accepted to IEEE TVCG 2026!',
  },
  {
    date: "2026-04",
    text: 'Our paper "InfoAlign" has been accepted to ACM CHI 2026!',
  },
  {
    date: "2026-04",
    text: 'Our paper "Tower of Babel" has been accepted to ACM CHI 2026!',
  },
  {
    date: "2025-11",
    text: 'Our paper "Beyond the Broadcast" has been accepted to IEEE TVCG 2025!',
  },
  {
    date: "2025-07",
    text: 'Our paper "KinemaFX" has been accepted to ACM UIST 2025!',
  },
  {
    date: "2025-05",
    text: 'Our paper "DTBIA" has been accepted to IEEE TVCG 2025!',
  },
  {
    date: "2025-02",
    text: 'Our paper "GNNFairViz" has been accepted to IEEE TVCG 2025!',
  },
  {
    date: "2023-08",
    text: 'Our paper "TopicBubbler" has been accepted to Visual Informatics 2023!',
  },
];

const publications = [
  {
    title:
      "Gen-lyph: A Human–AI Collaboration System for Creating Figurative Glyph-Based Visualizations",
    authors:
      "Jielin Feng, Xuan Chen, Xinwu Ye, Jun-Hsiang Yao, Zhuoheng Li, Laura Koesten, Xingyu Lan, Torsten Möller, Siming Chen",
    tag: "TVCG",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2026",
    link: "https://doi.org/10.1109/TVCG.2026.3730177",
    image: "/publications/gen-lyph.png",
  },
  {
    title:
      "InfoAlign: A Human–AI Co-Creation System for Storytelling with Infographics",
    authors:
      "Jielin Feng, Xinwu Ye, Qianhui Li, Verena Prantl, Jun-Hsiang Yao, Yuheng Zhao, Yun Wang, Siming Chen",
    tag: "CHI",
    venue:
      "Proceedings of the CHI Conference on Human Factors in Computing Systems, 2026",
    link: "https://doi.org/10.1145/3772318.3791844",
    image: "/publications/infoalign.png",
  },
  {
    title:
      "Tower of Babel in Cross-Cultural Communication: A Case Study of ‘Give Me a Chinese Name’ Dialogues During the TikTok Refugees Event",
    authors:
      "Jielin Feng, Zhibo Yang, Jingyi Zhao, Yujia Li, Xinwu Ye, Xingyu Lan, Siming Chen",
    tag: "CHI",
    venue:
      "Proceedings of the CHI Conference on Human Factors in Computing Systems, 2026",
    link: "https://doi.org/10.1145/3772318.3791152",
    image: "/publications/tower-of-babel.png",
  },
  {
    title:
      "VidAnimator: User-Guided Stylized 3D Character Animation from Human Videos",
    authors:
      "Xinwu Ye, Jun-Hsiang Yao, Jielin Feng, Shuhong Mei, Xingyu Lan, Siming Chen",
    tag: "ICML Workshop",
    venue: "GlobalSouthML Workshop at ICML 2026",
    link: "https://openreview.net/forum?id=BE7K2Id7yh",
    image: "/publications/vidanimator.png",
  },
  {
    title:
      "KinemaFX: A Kinematic-Driven Interactive System for Particle Effect Exploration and Customization",
    authors:
      "Yifei Zhang, Lin-Ping Yuan, Yuheng Zhao, Jielin Feng, Siming Chen",
    tag: "UIST",
    venue: "ACM Symposium on User Interface Software and Technology, 2025",
    link: "https://arxiv.org/abs/2507.19782",
    image: "/publications/kinemafx.png",
  },
  {
    title: "GNNFairViz: Visual Analysis for Graph Neural Network Fairness",
    authors:
      "Xinwu Ye, Jielin Feng, Erasmo Purificato, Ludovico Boratto, Michael Kamp, Zengfeng Huang, Siming Chen",
    tag: "TVCG",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    link: "https://doi.org/10.1109/TVCG.2025.3542419",
    image: "/publications/gnnfairviz.png",
  },
  {
    title:
      "Beyond the Broadcast: Enhancing VR Tennis Broadcasting through Embedded Visualizations and Camera Techniques",
    authors:
      "Jun-Hsiang Yao, Jielin Feng, Xinfang Tian, Kai Xu, Gulshat Amirkhanova, Siming Chen",
    tag: "TVCG",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    link: "https://doi.org/10.1109/TVCG.2025.3634638",
    image: "/publications/beyond-broadcast.png",
  },
  {
    title:
      "DTBIA: An Immersive Visual Analytics System for Brain-Inspired Research",
    authors:
      "Jun-Hsiang Yao, Mingzheng Li, Jiayi Liu, Yuxiao Li, Jielin Feng, Jun Han, Qibao Zheng, Jianfeng Feng, Siming Chen",
    tag: "TVCG",
    venue: "IEEE Transactions on Visualization and Computer Graphics, 2025",
    link: "https://doi.org/10.1109/TVCG.2025.3567135",
    image: "/publications/dtbia.png",
  },
  {
    title:
      "TopicBubbler: An Interactive Visual Analytics System for Cross-Level Fine-Grained Exploration of Social Media Data",
    authors: "Jielin Feng, Kehao Wu, Siming Chen",
    tag: "VI",
    venue: "Visual Informatics, 2023",
    link: "https://doi.org/10.1016/j.visinf.2023.08.002",
    image: "/publications/topicbubbler.png",
  },
];

function AuthorLine({ authors }: { authors: string }) {
  const [before = "", after = ""] = authors.split("Jielin Feng");
  return (
    <p className="publication-authors">
      {before}
      <strong>Jielin Feng</strong>
      {after}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="masthead">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="signature" href="#about-me" aria-label="Homepage">
            Jielin Feng
          </a>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
          </ul>
        </nav>
        <img
          className="header-monsters"
          src="/furry-monster-row-v3.png"
          alt=""
          aria-hidden="true"
        />
      </header>

      <main id="main" className="page-grid">
        <aside className="sidebar">
          <img
            className="sidebar-monster"
            src="/furry-monster-blue-v2.png"
            alt=""
            aria-hidden="true"
          />
          <div className="profile-photo">
            <img src="/profile-photo.jpg" alt="Jielin Feng" />
          </div>
          <ul className="contact-list">
            <li>
              <a href={scholarUrl} target="_blank" rel="noreferrer">
                <span
                  className="contact-icon scholar-icon"
                  aria-label="Google Scholar"
                  role="img"
                />
                <span>Google Scholar: Jielin Feng</span>
              </a>
            </li>
            <li>
              <a href="mailto:jielinfeng23@m.fudan.edu.cn">
                <span className="contact-icon email-icon" aria-hidden="true" />
                <span>Email: jielinfeng23@m.fudan.edu.cn</span>
              </a>
            </li>
            <li>
              <a href="https://fduvis.net/" target="_blank" rel="noreferrer">
                <span className="contact-icon lab-icon" aria-hidden="true" />
                <span>Lab: FUD-VIS</span>
              </a>
            </li>
          </ul>

          <section className="news" id="news" aria-labelledby="news-title">
            <h2 id="news-title">News</h2>
            <ul>
              {news.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <p>
                    <span className="news-icon" aria-hidden="true">🎉</span>
                    {item.text}
                  </p>
                  <time dateTime={item.date}>{item.date}</time>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <article className="page-content">
          <span className="anchor" id="about-me" />
          <p>
            Hello! I&apos;m <strong>Jielin Feng（冯捷琳）</strong>, a Ph.D. student at the{" "}
            <a
              href="https://sds.fudan.edu.cn/"
              target="_blank"
              rel="noreferrer"
            >
              School of Data Science, Fudan University
            </a>
            , supervised by Prof.{" "}
            <a href="http://simingchen.me/" target="_blank" rel="noreferrer">
              Siming Chen
            </a>
            . I am a member of the{" "}
            <a href="https://fduvis.net/" target="_blank" rel="noreferrer">
              FDU-VIS Lab
            </a>
            . I am currently a visiting Ph.D. student at the{" "}
            <a
              href="https://vda.cs.univie.ac.at/"
              target="_blank"
              rel="noreferrer"
            >
              Visualization and Data Analysis (VDA) Research Group
            </a>{" "}
            at the{" "}
            <a
              href="https://www.univie.ac.at/en/"
              target="_blank"
              rel="noreferrer"
            >
              University of Vienna
            </a>
            , collaborating with Prof.{" "}
            <a
              href="https://vda.cs.univie.ac.at/about-us/team/person/unitid/91/torsten-moeller"
              target="_blank"
              rel="noreferrer"
            >
              Torsten Möller
            </a>
            .
          </p>
          <p>
            My research lies at the intersection of{" "}
            <strong className="research-highlight">
              Human-Computer Interaction (HCI)
            </strong>
            ,{" "}
            <strong className="research-highlight">
              Human–AI Collaboration and Co-Creation
            </strong>
            , and{" "}
            <strong className="research-highlight">
              Data Storytelling and Communication
            </strong>
            . I design, develop, and evaluate AI-driven interactive systems that
            empower people to create, explore, understand, and communicate
            complex information.
          </p>
          <p>Welcome to my personal website. Feel free to explore my work!</p>

          <h1 id="publications">📝 Publications</h1>

          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-item" key={publication.title}>
                <div className="publication-image">
                  <img src={publication.image} alt={`${publication.title} preview`} />
                </div>
                <div className="publication-text">
                  <h3>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {publication.title}
                    </a>
                  </h3>
                  <AuthorLine authors={publication.authors} />
                  <p className="publication-venue">
                    <span>{publication.tag}</span>
                    {publication.venue}
                  </p>
                  <div className="publication-links">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span aria-hidden="true">▤</span> Paper
                    </a>
                  </div>
                </div>
                {index === 1 && (
                  <img
                    className="publication-wow-monster"
                    src="/wow-monster-green.png"
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
