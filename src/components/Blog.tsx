import './Blog.css';

const Blog: React.FC = () => {
  return (
    <section className="blog-section">
      <h2>
        Our <span>Blog</span>
      </h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque...
      </p>
      <div className="blog-card featured">
        <p>April 2, 2024</p>
        <h3>The Palate Pioneer: Navigating the World of Tastes</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque...
        </p>
        <div className="read-more">Read More →</div>
      </div>

      <div className="bloglist">
        <div className="blog-card">
          <p>April 2, 2024</p>
          <h3>The Culinary Canvas: Artistry on a Plate Buffet</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque...
          </p>
          <div className="read-more">Read More →</div>
        </div>

        <div className="blog-card">
          <p>April 2, 2024</p>
          <h3>Tasting Traditions: A Culinary and Odyssey</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque...
          </p>
          <div className="read-more">Read More →</div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
