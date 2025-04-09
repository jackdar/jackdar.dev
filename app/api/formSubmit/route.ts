export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!formData.email) {
      return new Response('{ "error": "No email provided!" }', {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Send the message to Slack
    const res = await fetch(process.env.SLACK_HOOK_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // If the request fails, throw an error
    if (!res.ok) {
      throw new Error("Failed to send message.");
    } else {
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    // If an error occurs, log the error and return a 500 status code
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
