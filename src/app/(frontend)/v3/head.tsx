export default function Head() {
  const title = 'Finanthropist Educare – Trading Institute (V3)'
  const description =
    "Maharashtra's highest-rated trading institute. Professional education, lifetime mentorship, and proven results."
  const url = 'https://example.com/v3'
  const ogImage = '/website-template-OG.webp'
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
