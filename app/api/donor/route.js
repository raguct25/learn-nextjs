import Donor from "@db_models/donor";
import { connectToDB } from "@db/database";

export const GET = async () => {
  try {
    await connectToDB();
    const donors = await Donor.find({});
    return new Response(JSON.stringify(donors), { status: 200 });
  } catch (error) {
    return new Response("Failed to create a new newDonor", { status: 500 });
  }
};
