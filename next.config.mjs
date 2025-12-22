/** @type {import('next').NextConfig} */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = supabaseUrl ? new URL(supabaseUrl).hostname : "";
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "",
//         port: "",
//         pathname: "/storage/v1/object/public/**",
//       },
//     ],
//   },
// };

const nextConfig = {
  images: {
    domains: [supabaseHostname],
  },
};

export default nextConfig;
