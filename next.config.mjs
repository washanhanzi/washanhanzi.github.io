/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({ ...nextConfig })