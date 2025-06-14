
interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "Abdul Raoof - Full Stack Developer | React, Node.js, Python",
  description = "Experienced Full Stack Developer specializing in React, Node.js, Python, and modern web technologies. Available for freelance projects and full-time opportunities.",
  image = "/profilepic.jpeg",
  url = "https://abdulraoof.dev"
}: SEOHeadProps) => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Full Stack Developer, React Developer, Node.js, Python, Web Development, Frontend, Backend, JavaScript, TypeScript, Kerala, India" />
      <meta name="author" content="Abdul Raoof" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Abdul Raoof Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e293b" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Abdul Raoof",
          "jobTitle": "Full Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://linkedin.com/in/abdulraoof",
            "https://github.com/abdulraoof"
          ],
          "knowsAbout": [
            "React",
            "Node.js",
            "Python",
            "JavaScript",
            "TypeScript",
            "Web Development",
            "Full Stack Development"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "India"
          }
        })}
      </script>
    </>
  );
};

export default SEOHead;
