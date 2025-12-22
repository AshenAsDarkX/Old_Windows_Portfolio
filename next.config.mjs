/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "https://upufgbyrumljduznsfie.supabase.co",
//         port: "",
//         pathname: "/storage/v1/object/public/**",
//       },
//     ],
//   },
// };

const nextConfig = {
  images: {
    domains: ["upufgbyrumljduznsfie.supabase.co"],
  },
};

export default nextConfig;
