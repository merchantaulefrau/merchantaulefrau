import MyPortfolio from "@/components/MyPortfolio";

export const metadata = {
  title: "Aulefrau's Nook - Original Art & Handcrafted Treasures",
  description:
    "Explore Aulefrau's Nook—a vibrant haven of original art, unique accessories, bookmarks, trinkets, and handmade decor infused with creative passion.",
  openGraph: {
    title: "Aulefrau's Nook - Original Art & Handcrafted Treasures",
    description:
      "Explore Aulefrau's Nook—a vibrant haven of original art, unique accessories, bookmarks, trinkets, and handmade decor infused with creative passion.",
    url: "https://yourdomain.com/",
    siteName: "Aulefrau's Nook",
    images: [
      {
        url: "/preview.png",
        width: 512,
        height: 512,
        alt: "Aulefrau's Nook preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <MyPortfolio />;
}
