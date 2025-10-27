"use client"; // WAJIB biar bisa pakai hook React

import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../../next-seo.config";

export default function SEOProvider() {
  return <DefaultSeo {...defaultSEOConfig} />;
}
