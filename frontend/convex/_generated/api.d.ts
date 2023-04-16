/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.12.4.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as getLatestStartTime from "../getLatestStartTime";
import type * as modSleep from "../modSleep";
import type * as sendPet from "../sendPet";
import type * as sendPetInfo from "../sendPetInfo";
import type * as sendSleep from "../sendSleep";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  getLatestStartTime: typeof getLatestStartTime;
  modSleep: typeof modSleep;
  sendPet: typeof sendPet;
  sendPetInfo: typeof sendPetInfo;
  sendSleep: typeof sendSleep;
}>;
