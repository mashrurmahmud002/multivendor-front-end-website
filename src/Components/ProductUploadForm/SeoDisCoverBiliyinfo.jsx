import { useState } from "react";

const META_DESC_MAX = 160;

export default function SeoDiscoverabilityCard() {
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [urlSlug, setUrlSlug] = useState("");

  return (
    <div className="w-full mx-auto border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center border border-white text-xs font-bold rounded-sm">
          H
        </span>
        <h2 className="text-sm font-bold tracking-wide uppercase">
          SEO &amp; Discoverability
        </h2>
      </div>

      <div className="p-5 space-y-6">
        {/* SEO Title */}
        <div>
          <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
            SEO Title
          </label>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            placeholder="Optimised page title for search engines"
            className="mt-2 w-full px-4 py-3 text-sm border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500"
          />
          <div className="mt-1 flex justify-between text-xs">
            <span className="text-orange-400">Recommended: 50–60 characters</span>
            <span className="text-gray-400">{seoTitle.length}</span>
          </div>
        </div>

        {/* Meta Description */}
        <div>
          <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
            Meta Description
          </label>
          <textarea
            value={metaDescription}
            onChange={(e) =>
              e.target.value.length <= META_DESC_MAX &&
              setMetaDescription(e.target.value)
            }
            maxLength={META_DESC_MAX}
            placeholder="Brief description shown in search results (max 160 chars)"
            rows={4}
            className="mt-2 w-full px-4 py-3 text-sm border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 outline-none resize-none focus:border-gray-500"
          />
          <div className="mt-1 flex justify-between text-xs">
            <span className="text-orange-400">Recommended: 120–155 characters</span>
            <span className="text-blue-400">
              {metaDescription.length} / {META_DESC_MAX}
            </span>
          </div>
        </div>

        {/* URL Slug */}
        <div>
          <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
            URL Slug
          </label>
          <div className="mt-2 flex border border-gray-300 rounded-md overflow-hidden">
            <span className="flex items-center px-4 bg-gray-100 text-gray-500 text-sm whitespace-nowrap">
              marketo.com/store/product/
            </span>
            <input
              type="text"
              value={urlSlug}
              onChange={(e) => setUrlSlug(e.target.value)}
              className="w-full px-4 py-3 text-sm text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}