import { sanityClient } from "@sanity/client";

export default sanityClient({
  projectId: "sqpvzy22",
  dataset: "production",
  useCdn: true,
});
