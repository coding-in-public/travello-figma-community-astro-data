export const prerender = false;
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const testimonials = await getCollection("testimonials");

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    })
  );
};

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const res = await fetch("http://localhost:3000/contacts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.id) {
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } else {
      throw new Error("Prob bob");
    }
  }
  return new Response(null, { status: 400 });
};

export const DELETE: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    })
  );
};

export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    })
  );
};
