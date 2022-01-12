import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x71Ec175F2BA9EFF8981d1bFEB65c9FF241F4d2FE",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Lion Fit",
        description: "This NFT will give you access to FitDAO!",
        image: readFileSync("scripts/assets/FitDAO2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()