import './Blog.css'

const Blog: React.FC = () => {
  return (
    <section className="blog-section">
      <h2>Our Blog</h2>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque...
      </p>
      <div className="blog-card">
        <p>April 2, 2024</p>
        <h3>The Palate Pioneer: Navigating the World of Tastes</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque...
        </p>
        <a href="#">Read More</a>
      </div>
    </section>
  );
};

export default Blog;
