   import { Container, getContainer } from "@cloudflare/containers";

   export class JuiceShop extends Container {
     defaultPort = 3000;
     sleepAfter = "3h";
   }

   export default {
     async fetch(request, env) {
       if (new URL(request.url).pathname === "/.well-known/sekura-verify.txt") {
         return new Response("https://juice-cf.dheeraj-7d7.workers.dev/.well-known/sekura-verify.txt");
       }
       return getContainer(env.JUICE).fetch(request);
     },
   };
