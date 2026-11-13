import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/articles';

type Props = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  publishedAt: string;
  featured?: boolean;
};

export default function ArticleCard({ slug, title, category, excerpt, imageUrl, imageAlt, publishedAt, featured }: Props) {
  return (
    <article className={`article-card${featured ? ' article-card-featured' : ''}`}>
      <Link className="card-image" href={`/artikelen/${slug}`}>
        <Image src={imageUrl} alt={imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
        <span className="image-category">{category}</span>
      </Link>
      <div className="card-copy">
        <p className="eyebrow">{formatDate(publishedAt)}</p>
        <h3><Link href={`/artikelen/${slug}`}>{title}</Link></h3>
        <p>{excerpt}</p>
        <Link className="text-link" href={`/artikelen/${slug}`}>Lees het verhaal <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
