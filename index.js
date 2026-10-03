import { Container, getContainer } from "@cloudflare/containers";

export class JuiceShop extends Container {
  defaultPort = 3000;  // Juice Shop listens on port 3000
  sleepAfter = "3h";   // stay awake for the whole test
}

export default {
   async fetch(request, env) {
     if (new URL(request.url).pathname === "/.well-known/sekura-verify.txt") {
       return new Response("PASTE-YOUR-TOKEN-HERE");
     }
     return getContainer(env.JUICE).fetch(request);
   },
};
