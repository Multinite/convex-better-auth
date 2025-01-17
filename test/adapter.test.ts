import { betterAuth } from "better-auth";
import { describe, expect, it } from "vitest";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { convexAdapter } from "./../src/index";

describe(`Handle Convex Adapter`, async () => {
  it(`should successfully add the Convex Adapter`, async () => {
    const auth = betterAuth({
      database: convexAdapter({
        convex_url: process.env.CONVEX_URL as string,
      }),
    });

    expect(auth).toBeDefined();
    expect(auth.options.database).toBeDefined();
    expect(auth.options.database({}).id).toEqual("convex");
  });

});
