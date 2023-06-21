import Donor from "@db_models/donor";
import { connectToDB } from "@db/database";

export const POST = async (request) => {
  const { name, mobile, age, bloodGroup } = await request.json();
  try {
    await connectToDB();
    const newDonor = new Donor({ name, mobile, age, bloodGroup });
    await newDonor.save();
    return new Response(JSON.stringify(newDonor), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new newDonor", { status: 500 });
  }
};
