import type { NextPage } from 'next'
import { MenuIcon } from '@heroicons/react/solid';
import { SearchIcon , MicrophoneIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import { useRouter } from "next/router"
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)

  };

  const image = "https://lh3.googleusercontent.com/fife/AAWUweV8kniv9RLkHT_rjYjtRBO6zEdV4_L6_0Pr3jgkP2hzcpxQ4jFvIlkzleR6BlZSPj0ySS9ce-qNHtFrvkt8aH_jmXZxjnzjULbI4m8WrjBlHTnEP6AkG_MwkzYQhTYEpqPPIeaeCVcoJuwExWSEP2HinLa27bT_tN0dBnYPHwChV9iOLAE_9w325AbIRuY4jM-8tQqHTGnOb4v0b9q9hvzZH-aQgCRfLLa_gUP9CfknbvcaZHY42ORx8WxTufoSvv5Tc61oA2VcjLtLf8M11UuMhO-ynLjdPodq3mj9CqqTnXLo2UNG9kyM5vAXCefZhjUzcihThSQmR6mWPtXMKXIZKv-kAXGpguyAt1rVsyqFnK1ljT3_6O5WlTOwpQy8uqFco_xvTfIgHl8BX2T9_xoj-ZOulr_GWREahonatqlebi8h2OHneZz5LdUnjLLyBZ-GTB_PXcdDIXvam5n8jOlnj_JAYdId4LRPEWU903XNIEFG5ksW7zMo_kJLv_ILbUzVmo4ShAruwwiMfGTl4u8gOCbgZGvFhR_PfB1bR5qxzzAH-7LRYnZBOXL-JpjGcNhNPVdQ6RD98gadG5HEHAKBy-6-LpLB0MxPQ_zbeu277vqwcyVZNs_BXpYrafBLdvWprVYpkljvw53eNtsTZtTTCIqArJOnphGwZeuDFVrmjEvk426M7stQpZ8fodW9PwToSqQ8myEJ0TtSjupCDYNkEDAkINcZdOq61mvLrctcDbdxoLfxRJrkUt4Q8CNnB8u7BA460hpJJmHt7Djnjd9sqXEbOu25iNESyylyiPUyJf12BtwSUTmkT-aYg2mpIL8kfFScTYYWr_KQ7GQENpuOLs7gD6FHKZlcfGAY1N0qYdUNK4EGS3_8pDkikUdQ8io6q1Zpb3ISiNVWev5Up3rJISwCQHkU4c4BILhfDa2QCWgwcq4ATpJtlwJ_QffvEyjXSveplKtwYXDFM7zXODNFo_UwZNWfvBPHBgjH3xFyOAiS3eO9_9QVP2i_Q_iMVn8yZ7DbC4WiEvx1YDpG40r95etubp_VU1UFZ_YS-u-tgTOJh0g0KJJz4b60LGtHEDMboBdR_LfmDOXf7WJM79-cmKrk5gQpM7YtcnZE_74Ma_Na52paUmZiyILOLnVfR-4UPlgVf6EhnaDw79DKw_NrKyeGKUQjgN1pHBUaVykIKWF-lh4sDxmYBcl05VgrxaN8EYx3MKKwJvfgu-gPvP0A7nFZWocXno7G0MJLotYGwTFvxHyRNEiLfAgwiw8-7cevQPFHwKM7N4z0ptTThzsSheJbuR3eYV4GwjZLYUE2nCB2kSHY0-wRD3Pj_pFC83XUYlQXde5kIUFVPESGpeAwElaM926uBhdVuIbXUfOWOABQ3T7L5T2coaYhbgENRlceZot7BkWVG79TmgfKOcRB__2EXcX6ZynIch3HLD40kVPe27bELjFfDJWEFb1mVU8aq6finoG_-bPP_157iYQu05-6opyyrHRFAgY=s32-c";
  const logo = "https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  return (
    <main>
      <Head>
          <title>Google Search</title>
      </Head>
      <div className="flex inline justify-between m-4">
        <div className="text-sm flex space-x-5 inline items-center">
          <h1 className="cursor-pointer hover:underline">About</h1>
          <h1 className="cursor-pointer hover:underline">Store</h1>
        </div>
        <div className="flex space-x-5  text-sm items-center ">
          <h1 className="cursor-pointer hover:underline">Gmail</h1>
          <h1 className="cursor-pointer hover:underline">Images</h1>
          <MenuIcon className="h-5 w-5 mt-[1px] cursor-pointer hover:bg-gray-200 hover:rounded-lg hover:border-2" />
          <img src={image} className="rounded-full cursor-pointer"></img>
        </div>
      </div>

      <div className="flex justify-center mt-60">
        <img src={logo} className=""></img>
      </div>
      <div className="flex justify-center mt-2 items-center">
        <SearchIcon className="w-4 h-4 absolute opacity-50 left-1/3 ml-2" />
        <input ref={searchInputRef} className="pl-7 border-[1.5px] rounded-xl w-1/3 h-11 focus:border-2 focus:shadow-lg hover:shadow-md" placeholder=""></input>
        <MicrophoneIcon className="cursor-pointer w-4 h-4 absolute right-1/3 mr-2 opacity-50" /> 
      </div>
      <div className="flex justify-center space-x-5 items-center mt-5">
        <button onClick={search} className="bg-gray-100 p-2 rounded-md text-sm opacity-80 hover:opacity-100">Google Search</button>
        <button onClick={search} className="bg-gray-100 p-2 rounded-md text-sm opacity-80 hover:opacity-100">I'm Feeling Lucky</button>
      </div>
    </main>
  )
}

export default Home
