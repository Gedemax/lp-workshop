import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

function SEO({ 
  title, 
  description, 
  keywords = 'leitura corporal, workshop, terapeutas, mapa da personalidade, oneida fernanda, atrair clientes, terapia, desenvolvimento pessoal',
  image = '/og-image.jpg',
  url = 'https://workshop.souterapeuta.pro',
  type = 'website',
  structuredData
}: SEOProps) {
  const fullTitle = `${title} | Workshop Leitura Corporal - Oneida Fernanda`;
  const fullUrl = url.startsWith('http') ? url : `https://workshop.souterapeuta.pro${url}`;
  const fullImage = image.startsWith('http') ? image : `https://workshop.souterapeuta.pro${image}`;

  return (
    <Helmet>
      {/* Título e meta tags básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Oneida Fernanda" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="pt-BR" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Workshop Leitura Corporal" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@oneidafernanda" />

      {/* Meta tags adicionais para conversão */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
