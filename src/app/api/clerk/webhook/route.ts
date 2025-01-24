import { db } from "@/server/db";

export const GET = async (req: Request) => {
  try {
    const { data } = await req.json();
    const emailAddress = data.email_addresses?.[0]?.email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const fullName = `${firstName} ${lastName}`;
    const imageUrl = data.image_url;
    const id = data.id;

    // Validate required fields
    if (!id || !emailAddress || !firstName || !lastName) {
      return new Response("Invalid data received", { status: 400 });
    }

    // Upsert the user in the database
    await db.user.upsert({
      where: { id },
      create: {
        id,
        emailAddress,
        name: fullName,
        imageUrl,
      },
      update: {
        emailAddress,
        name: fullName,
        imageUrl,
      },
    });
    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Webhook failed", { status: 500 });
  }
};
