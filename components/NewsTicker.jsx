import { labTickerItems } from "@/data/news";

export function NewsTicker() {
  const items = [...labTickerItems, ...labTickerItems];

  return (
    <div className="news-ticker-wrap" aria-label="Lab focus areas">
      <div className="news-ticker-track">
        {items.map((item, index) => (
          <span className="news-ticker-item" key={`${item.title}-${index}`}>
            <span className="news-ticker-date">{item.label}</span>
            <strong>{item.title}</strong>
            <span className="news-ticker-detail">{item.detail}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
