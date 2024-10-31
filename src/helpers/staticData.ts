import gromoLogo from "../assets/gromoLogo.svg";
import vTechLogo from "../assets/vTechLogo.png";
import zopperLogo from "../assets/zopperLogo.svg";
import useScrollTracker from "../assets/useScrollTracker.png";
import strNpm from "../assets/strNpm.png";
import presale from "../assets/presale.png";
import donationApp from "../assets/donationApp.png";
import projectImagePlanStore from "../assets/projectImagePlanStore.jpeg";
import bearerBlog from "../assets/bearerBlog.webp";
import useImperativeHookBlog from "../assets/useImperativeHookBlog.webp";
import fiber from "../assets/fiber-reconciler.jpeg";
import uploadDapp from "../assets/uploadDapp.jpeg";
import blobFns from "../assets/blob-fns.png";
import treeshaking from "../assets/treeshaking.png";

export const workExpData = [
  {
    logo: zopperLogo,
    companyName: "Zopper",
    position: "SDE-Frontend",
    durationFrom: "Nov 2023",
    durationTo: "Present",
  },
  {
    logo: gromoLogo,
    companyName: "Gromo",
    position: "SDE-Frontend",
    durationFrom: "Sep 2022",
    durationTo: "Nov 2023",
  },
  {
    logo: vTechLogo,
    companyName: "V Tech It Solution",
    position: "SDE-Frontend",
    durationFrom: "June 2021",
    durationTo: "Aug 2022",
  },
];

export const projectsData = [
  {
    id: 6,
    img: donationApp,
    title: "Donate X - DApp",
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_ethereum-dapp-blockchain-activity-7213105178957291520-qJ9b?utm_source=share&utm_medium=member_desktop",
    tags: ["react", "web3js", "blockchain", "donation app"],
    description:
      "Donate X – a cutting-edge decentralized app (DApp) for crowdfunding reforestation efforts through Ethereum donations.",
  },

  {
    id: 5,
    img: presale,
    title: "Token Presale - DApp",
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_tokenpresale-blockchain-erc20-activity-7218056618683326464-C-Ac?utm_source=share&utm_medium=member_desktop",
    tags: ["blockchain", "erc20", "web3js", "react"],
    description:
      "Enables token purchases and provides access to token stats and tokenomics.",
  },
  {
    id: 7,
    img: projectImagePlanStore,
    title: "Plant Store 3.0 - DApp",
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_blockchaindevelopment-dapp-ethereum-activity-7210216762536001536-UGZq?utm_source=share&utm_medium=member_desktop",
    tags: ["react", "web3js", "blockchain", "dapp"],
    description:
      "Plant Store 3.0 is a decentralized application (DApp) that allows users to buy and sell plants, and to collect rewards for their purchases.",
  },
  {
    id: 8,
    img: uploadDapp,
    title: "Drive 3.0 - DApp",
    redirectionLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7208744132645642240?utm_source=share&utm_medium=member_desktop",
    tags: ["react", "web3js", "blockchain", "dapp"],
    description:
      "Upload images to Pinata IPFS for decentralized storage. Manage access with MetaMask - grant/revoke permissions",
  },
];

export const npmData = [
  {
    id: 1,
    img: useScrollTracker,
    title: "useScrollTracker",
    tags: ["npm", "react", "custom hook"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_reactjs-opensource-webdev-activity-7253809146842501121-k1S0?utm_source=share&utm_medium=member_desktop",
    description:
      "useScrollTracker is a custom React hook that tracks the user's scroll progress on a web page or within a specific container. It returns the current scroll percentage, making it easy to implement features like reading progress bars, infinite scrolling, scroll-based animations, and sticky headers. The hook is lightweight, flexible, and suitable for enhancing user experience in React applications. With built-in support for both window and custom container elements, useScrollTracker helps developers seamlessly integrate scroll-based features into their projects",
  },
  {
    id: 4,
    img: strNpm,
    title: "str-interpolator",
    tags: ["npm", "string", "typescript", "interpolation"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_typescript-javascript-npm-activity-7230799957782315009-BGfj?utm_source=share&utm_medium=member_desktop",
    description:
      "A TypeScript utility function to replace placeholders in a string with values from an object, supporting both simple and nested object paths.",
  },
  {
    id: 4,
    img: blobFns,
    title: "Blob-Fns",
    tags: ["npm", "blob", "typescript"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_blob-fns-activity-7197859624765571072-dDTH?utm_source=share&utm_medium=member_desktop",
    description:
      "Blob-Fns, a package that makes handling Blob-related functions much easier. It gathers all the commonly used Blob functions in one place, simplifying tasks like creating, converting, compressing, and downloading Blobs.",
  },
];

export const blogsData = [
  {
    id: 9,
    img: fiber,
    title: "React Fiber reconciler",
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_react-ui-performance-activity-7190258448209440768-LJV3?utm_source=share&utm_medium=member_desktop",
    tags: ["react", "fiber", "performance", "blog"],
    description:
      "Ever wondered how React Fiber reconciler prioritizes tasks? Let's break it down!",
  },
  {
    id: 3,
    img: useImperativeHookBlog,
    title: "useImperativeHandle hook",
    tags: ["react", "medium blog", "hook", "useImperativeHandle"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_calling-child-component-functions-from-parent-activity-7231964861868482560-I0Nt?utm_source=share&utm_medium=member_desktop",
    description:
      "React’s useImperativeHandle hook, used with forwardRef, allows you to customize the values and methods exposed to parent components via ref. This enables you to call functions defined in a child component from a parent component.",
  },
  {
    id: 2,
    img: bearerBlog,
    title: "Token-Based Authentication",
    tags: ["react", "medium blog", "auth", "tokens"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_bearer-vs-non-bearer-tokens-for-api-calls-activity-7234261466281828352-IT-W?utm_source=share&utm_medium=member_desktop",
    description:
      "When building web applications, secure API communication is crucial. As a developer, you need to understand two common authentication methods: Bearer tokens and Non-Bearer tokens. Let’s dive into what they are, how to use them, and when to choose each.",
  },
  {
    id: 1,
    img: treeshaking,
    title: "Exploring React's Tree Shaking",
    tags: ["react", "tree shaking", "optimization"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_react-treeshaking-optimization-activity-7187886810046332929-uaLh?utm_source=share&utm_medium=member_desktop",
    description:
      "Ever heard of Tree Shaking in React? It's like tidying up your code to make it faster! Tree Shaking trims the extra stuff in your code that you don't actually use, making your app load quicker and run smoother.",
  },
  {
    id: 1,
    img: treeshaking,
    title: "Exploring React's Tree Shaking-2",
    tags: ["react", "tree shaking", "optimization"],
    redirectionLink:
      "https://www.linkedin.com/posts/ashish-cumar_webpack-babel-reactjs-activity-7188921308942946305-mlcF?utm_source=share&utm_medium=member_desktop",
    description: `In my last blog, I talked about "Tree Shaking" in React apps. Today, let's dive deeper into how Webpack performs this essential task`,
  },
];

export const techStack = [
  {
    title: "Html",
  },
  {
    title: "CSS",
  },
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "React Js",
  },
  {
    title: "Next Js",
  },
  {
    title: "Node Js",
  },
  {
    title: "Express Js",
  },
  {
    title: "Sql",
  },
  {
    title: "MongoDB",
  },
  {
    title: "Git",
  },
  {
    title: "Jest",
  },
  {
    title: "Mocha",
  },
];
