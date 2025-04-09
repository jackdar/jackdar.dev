export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log(formData);

    // Send the message to Slack
    const res = await fetch(
      "https://hooks.slack.com/triggers/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",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

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
