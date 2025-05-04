
// Mock courses data
export const mockCourses = [
  {
    id: '1',
    title: 'Introduction to Blockchain and Cryptocurrencies',
    description: 'Learn the fundamentals of blockchain technology and how cryptocurrencies work in this beginner-friendly course.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Alex Johnson',
    views: 15000,
    participants: 2100,
    category: 'Blockchain',
    level: 'beginner' as const
  },
  {
    id: '2',
    title: 'Cryptocurrency Trading Strategies',
    description: 'Master the art of trading cryptocurrencies with proven strategies and risk management techniques.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Sarah Williams',
    views: 12000,
    participants: 1800,
    category: 'Trading',
    level: 'intermediate' as const
  },
  {
    id: '3',
    title: 'Advanced DeFi Protocols',
    description: 'Dive deep into decentralized finance protocols and learn how to maximize your yields.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Mike Chen',
    views: 9000,
    participants: 1200,
    category: 'DeFi',
    level: 'advanced' as const
  },
  {
    id: '4',
    title: 'NFT Creation and Marketing',
    description: 'Create your own NFT collection and learn effective marketing strategies to sell your digital art.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1645726907220-f7d5d622fca2?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Jessica Brown',
    views: 11000,
    participants: 1500,
    category: 'NFTs',
    level: 'intermediate' as const
  },
  {
    id: '5',
    title: 'Web3 Development with Solidity',
    description: 'Build decentralized applications on Ethereum using Solidity and web3.js.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop',
    instructor: 'David Lee',
    views: 8500,
    participants: 1100,
    category: 'Development',
    level: 'advanced' as const
  },
  {
    id: '6',
    title: 'Crypto Security Best Practices',
    description: 'Protect your digital assets with industry-standard security measures and best practices.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Emily Taylor',
    views: 10000,
    participants: 1700,
    category: 'Security',
    level: 'beginner' as const
  },
  {
    id: '7',
    title: 'Tokenomics and Cryptocurrency Economics',
    description: 'Understand the economic principles behind successful cryptocurrency projects.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Robert Martinez',
    views: 7500,
    participants: 900,
    category: 'Economics',
    level: 'intermediate' as const
  },
  {
    id: '8',
    title: 'Crypto Tax Compliance',
    description: 'Navigate the complex world of cryptocurrency taxation and stay compliant with regulations.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586486855514-8c695b00d6e3?q=80&w=1000&auto=format&fit=crop',
    instructor: 'Lisa Anderson',
    views: 6500,
    participants: 800,
    category: 'Legal',
    level: 'beginner' as const
  }
];

// Mock news data
export const mockNews = [
  {
    id: '1',
    title: 'Bitcoin Breaks All-Time High as Institutional Adoption Increases',
    excerpt: 'Bitcoin has reached a new all-time high as major institutions continue to add the cryptocurrency to their balance sheets.',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop',
    date: 'May 2, 2025',
    author: 'Crypto News Team'
  },
  {
    id: '2',
    title: 'Ethereum 2.0 Upgrade Completes: What You Need to Know',
    excerpt: 'The long-awaited Ethereum 2.0 upgrade has finally completed, bringing major improvements to scalability and energy efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1000&auto=format&fit=crop',
    date: 'April 28, 2025',
    author: 'Tech Analyst'
  },
  {
    id: '3',
    title: 'New Regulations Set to Impact Cryptocurrency Markets',
    excerpt: 'Regulatory bodies worldwide are introducing new frameworks for cryptocurrency oversight. Here\'s how it might affect investors.',
    imageUrl: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1000&auto=format&fit=crop',
    date: 'April 25, 2025',
    author: 'Legal Expert'
  },
  {
    id: '4',
    title: 'DeFi Protocol Launches $100M Incentive Program',
    excerpt: 'A major DeFi protocol has announced a $100 million incentive program to attract liquidity providers and users.',
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop',
    date: 'April 22, 2025',
    author: 'DeFi Reporter'
  },
  {
    id: '5',
    title: 'NFT Market Shows Signs of Recovery After Slump',
    excerpt: 'After months of declining sales, the NFT market is showing signs of recovery with several high-profile collections seeing renewed interest.',
    imageUrl: 'https://images.unsplash.com/photo-1646864222473-9cf0fb2ef1c8?q=80&w=1000&auto=format&fit=crop',
    date: 'April 20, 2025',
    author: 'Art & Tech Analyst'
  },
  {
    id: '6',
    title: 'Major Central Banks Accelerate CBDC Development',
    excerpt: 'Several central banks around the world are speeding up their development of central bank digital currencies.',
    imageUrl: 'https://images.unsplash.com/photo-1616803140344-7a9b0cb5124d?q=80&w=1000&auto=format&fit=crop',
    date: 'April 18, 2025',
    author: 'Financial Correspondent'
  }
];

// Mock blog posts
export const mockBlogPosts = [
  {
    id: '1',
    title: 'The Evolution of Cryptocurrency: From Bitcoin to Present Day',
    content: `<p>Since the inception of Bitcoin in 2009, the cryptocurrency landscape has evolved dramatically. This post explores the major developments and milestones in crypto history.</p><p>The cryptocurrency revolution began when Satoshi Nakamoto published the Bitcoin whitepaper in 2008, introducing a peer-to-peer electronic cash system that would operate without the need for intermediaries like banks.</p><p>Over the years, thousands of alternative cryptocurrencies (altcoins) have emerged, each with unique features and use cases. Ethereum introduced smart contracts, enabling decentralized applications. Privacy coins like Monero and Zcash focused on enhancing transaction privacy.</p><p>The industry has faced numerous challenges, including regulatory scrutiny, security breaches, and market volatility. Despite these hurdles, cryptocurrency adoption continues to grow worldwide.</p><p>Today, we're seeing increased institutional interest, with major companies adding Bitcoin to their balance sheets and financial institutions offering crypto services to clients.</p><p>The future looks promising, with developments in scalability solutions, interoperability between blockchains, and the integration of cryptocurrency with traditional finance.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=1000&auto=format&fit=crop',
    date: 'May 1, 2025',
    author: 'Crypto Historian',
    categories: ['Bitcoin', 'Cryptocurrency', 'Blockchain']
  },
  {
    id: '2',
    title: 'Understanding DeFi: The Future of Finance',
    content: `<p>Decentralized Finance (DeFi) is revolutionizing the way we think about financial systems. This article explains what DeFi is and why it matters.</p><p>DeFi refers to financial applications built on blockchain technology that aim to recreate and improve upon traditional financial systems without relying on intermediaries like banks or brokerages.</p><p>Key components of the DeFi ecosystem include:</p><ul><li>Lending and borrowing platforms</li><li>Decentralized exchanges (DEXs)</li><li>Stablecoins</li><li>Insurance protocols</li><li>Yield farming and liquidity mining</li></ul><p>The advantages of DeFi include permissionless access, transparency, interoperability, and programmability. Anyone with an internet connection can access DeFi services regardless of their location or financial status.</p><p>However, DeFi also faces challenges such as smart contract vulnerabilities, regulatory uncertainty, and the complexity that can make it difficult for newcomers to navigate safely.</p><p>Despite these challenges, DeFi continues to grow rapidly, with billions of dollars locked in various protocols, signaling strong belief in its potential to transform finance.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=1000&auto=format&fit=crop',
    date: 'April 29, 2025',
    author: 'DeFi Expert',
    categories: ['DeFi', 'Finance', 'Blockchain']
  },
  {
    id: '3',
    title: 'NFTs Explained: More Than Just Digital Art',
    content: `<p>Non-fungible tokens (NFTs) have captured mainstream attention, but there's much more to them than digital art. This post explores the broader implications of NFT technology.</p><p>NFTs are unique digital assets that represent ownership of specific items, whether digital or physical. Unlike cryptocurrencies such as Bitcoin, each NFT has distinct characteristics that make it non-interchangeable.</p><p>While digital art has been the most visible application of NFTs, the technology has far-reaching potential across multiple industries:</p><ul><li>Gaming: In-game items that players truly own</li><li>Real estate: Tokenized property ownership</li><li>Identity verification: Secure digital identity solutions</li><li>Supply chain: Tracking product authenticity</li><li>Event ticketing: Preventing fraud and enabling royalties on resales</li></ul><p>The environmental concerns around NFTs, particularly those minted on energy-intensive blockchains, have led to the development of more sustainable alternatives.</p><p>As the technology matures, we're likely to see NFTs become an integral part of digital ownership and authentication systems across various sectors.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1646837651514-551e8b20ec60?q=80&w=1000&auto=format&fit=crop',
    date: 'April 26, 2025',
    author: 'Digital Arts Analyst',
    categories: ['NFTs', 'Digital Art', 'Blockchain']
  }
];
